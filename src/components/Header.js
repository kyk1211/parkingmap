import React from 'react';

export default function Header() {

  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div>
      <button type='button' onClick={handleClick}>Home</button>
    </div>
  )
}