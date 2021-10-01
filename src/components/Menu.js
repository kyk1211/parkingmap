import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dataSelector, getDataSearch } from '../slices/dataSlice';


export default function Menu() {
  const { data } = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleClick = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedArr = []
    data.map(item => {
      if (item.rdnmadr.indexOf(search) > -1) {
        searchedArr.push(item.id)
      }
    })
    dispatch(getDataSearch(searchedArr))
  }

  const handleChange = (e) => {
    const { 
      target: { value },
    } = e;
    setSearch(value);
  }

  return (
    <>
      <div style={{height: '50px', backgroundColor: 'white'}}>
        <button type='button' style={{marginTop: '10px'}} onClick={handleClick}>Refresh</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search" name="search" value={search} onChange={handleChange} required />
        <button type="submit">검색</button>
      </form>
    </>
  );
}