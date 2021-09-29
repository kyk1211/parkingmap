import React from 'react';

export default function InfoTable({ data }) {
  
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
              <tr key={idx}>
                <th>{item.rdnmadr}</th>
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