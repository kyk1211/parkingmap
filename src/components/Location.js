/*global kakao*/ 
import React, { useEffect } from 'react'
import markerStar from '../img/markerStar.png';

function Location({ data }) {
  const geocoder = new kakao.maps.services.Geocoder();
  const addressData = data.map(item => item.rdnmadr);
  const addrList = addressData.filter((addr) => addr !== "");

  useEffect(()=>{
    //map options
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.7269589, 127.0936762),
      level: 11
    };
    kakao.maps.load(() => {
      //map
      const map = new kakao.maps.Map(container, options);
  
      //marker
      addrList.forEach((addr, i) => {
        geocoder.addressSearch(addr, (res, status) => {
          if (status = kakao.maps.services.Status.OK && res.length !== 0) {
            console.log(res);
            const coords = new kakao.maps.LatLng(res[0].y, res[0].x);
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
              image: new kakao.maps.MarkerImage(markerStar, new kakao.maps.Size(24,35)),
            });
          }
        });
      });
    });
  }, [addrList]);

  return (
    <>
      <div id="map" style={{width:"500px", height:"400px"}}></div>
    </>
  )
}

export default Location;