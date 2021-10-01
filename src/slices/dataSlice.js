import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  loading: false,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: state => {
      state.loading = true
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getDataSearch: (state, action) => {
      const dataFiltering = state.data.map(item => {
        if (action.payload.indexOf(item.id) > -1) {
          item.searched = true
          return item
        } else {
          item.searched = false
          return item
        }
      })
      state.data = dataFiltering
    },
  },
})

// reducer
export default dataSlice.reducer

// selector
export const dataSelector = state => state.data

// action
export const { getData, getDataSuccess, getDataSearch } = dataSlice.actions

export function callData(pageNo, numOfRows) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `/tn_pubr_prkplce_info_api?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`
  return async dispatch => {
    dispatch(getData())

    try {
      const response = await axios.get(url);
      const { data: { response: { body: { items } } } } = response
      const parkingData = items.filter(item => item.rdnmadr)
      parkingData.forEach((item, idx) => {
        item.searched = true
        item.id = idx
      })
      
      dispatch(getDataSuccess(parkingData))
    } catch (err) {
      console.log(err);
    }
  }
}
