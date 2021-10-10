import React from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from '../slices/dataSlice';

export default function InfoTable() {
  
  const { data } = useSelector(dataSelector);
  const searchedData = data.filter(item => item.searched === true);
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>도로명주소</th>
            <th>지번주소</th>
            <th>운영요일</th>
          </tr>
        </thead>
        {searchedData.map(item => (
          <tbody key={item.id}>
            <tr>
              <th>{item.rdnmadr}</th>
              <th>{item.lnmadr}</th>
              <th>{item.operDay}</th>
            </tr>
          </tbody>)
        )}
      </table>
    </>
  );
}