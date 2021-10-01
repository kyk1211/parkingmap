/*global kakao*/ 
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import markerStar from '../img/markerStar.png';
import { dataSelector } from '../slices/dataSlice';

export default function Location() {
  
  const { data } = useSelector(dataSelector);
  const geocoder = new kakao.maps.services.Geocoder();
  const searchedData = data.filter(item => item.searched === true)
  const addrList = searchedData.map(item => item.rdnmadr);

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
      addrList.forEach((addr) => {
        geocoder.addressSearch(addr, (res, status) => {
          if (status = kakao.maps.services.Status.OK && res.length !== 0) {
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
