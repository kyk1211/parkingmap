import React from 'react';

export default function InfoTable({ data, isLoading }) {
  console.log(data, isLoading);
  return (
    <table>
      <thead>
        <tr>
          <th>도로명주소</th>
          <th>지번주소</th>
          <th>운영요일</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, idx) => {
          if (item.rdnmadr) {
            return (
              <tr>
                <th>{item.rdnmadr || '미표기'}</th>
                <th>{item.lnmadr}</th>
                <th>{item.operDay}</th>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}