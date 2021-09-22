import React, { useState, useRef, useEffect } from "react";


function Location() {
  const { kakao } = window;
  const container = useRef(null);
  const [latLng, setLatLng] = useState([33.450701, 126.570667]); 
  const options = {
    center: new kakao.maps.LatLng(...latLng),
    level: 3,
    scrollwheel: true
  };
  useEffect(() => {
    kakao.maps.load(() => {
      new kakao.maps.Map(container.current, options);
    });
  }, [options]);
  return (
    <div 
      ref={container} 
      className='map' 
      style={{width: '500px', height: "500px"}}>
    </div>
  );
}

export default Location;