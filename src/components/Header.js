import React from 'react';

export default function Header() {

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div style={{height: '50px', backgroundColor: 'white'}}>
      <button type='button' style={{marginTop: '10px'}} onClick={handleClick}>Refresh</button>
    </div>
  );
}