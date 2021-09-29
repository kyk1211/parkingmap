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
  },
})

// reducer
export default dataSlice.reducer
// selector
export const dataSelector = state => state.data
// action
export const { getData, getDataSuccess } = dataSlice.actions

export function callData() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const pageNo = 0;
  const numOfRows = 20;
  const url = `/tn_pubr_prkplce_info_api?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`
  return async dispatch => {
    dispatch(getData())

    try {
      const response = await axios.get(url);
      const { data: { response: { body: { items } } } } = response;
      
      dispatch(getDataSuccess(items))
    } catch (err) {
      console.log(err);
    }
  }
}
