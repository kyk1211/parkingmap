/*global kakao*/ 
import React, { useState, useEffect } from 'react'
import markerStar from '../img/markerStar.png';

function Location() {
  const [pos, setPos] = useState([]);
  const geocoder = new kakao.maps.services.Geocoder();
  const data = {"response":{"header":{"resultCode":"00","resultMsg":"NORMAL_SERVICE","type":"json"},"body":{"items":[{"prkplceNo":"166-2-000036","prkplceNm":"남부역1길","prkplceSe":"공영","prkplceType":"노외","rdnmadr":"인천광역시 부평구 장제로27번길 17(부평동) 인근","lnmadr":"인천광역시 부평구 부평동 610-3","prkcmprt":"10","feedingSe":"기타","enforceSe":"미시행","operDay":"평일+토요일+공휴일","weekdayOperOpenHhmm":"00:00","weekdayOperColseHhmm":"00:00","satOperOperOpenHhmm":"00:00","satOperCloseHhmm":"00:00","holidayOperOpenHhmm":"00:00","holidayCloseOpenHhmm":"00:00","parkingchrgeInfo":"무료","basicTime":"0","basicCharge":"0","addUnitTime":"","addUnitCharge":"","dayCmmtktAdjTime":"","dayCmmtkt":"","monthCmmtkt":"","metpay":"","spcmnt":"","institutionNm":"인천광역시 부평구시설관리공단","phoneNumber":"032-262-9220","latitude":"37.48791539","longitude":"126.7281473","referenceDate":"2021-01-04","insttCode":"3540000"},{"prkplceNo":"166-2-000037","prkplceNm":"산곡배움2길","prkplceSe":"공영","prkplceType":"노외","rdnmadr":"인천광역시 부평구 화랑남로9번길 20(산곡동) 일원","lnmadr":"인천광역시 부평구 산곡동 311-102","prkcmprt":"8","feedingSe":"기타","enforceSe":"미시행","operDay":"평일+토요일+공휴일","weekdayOperOpenHhmm":"00:00","weekdayOperColseHhmm":"00:00","satOperOperOpenHhmm":"00:00","satOperCloseHhmm":"00:00","holidayOperOpenHhmm":"00:00","holidayCloseOpenHhmm":"00:00","parkingchrgeInfo":"무료","basicTime":"0","basicCharge":"0","addUnitTime":"","addUnitCharge":"","dayCmmtktAdjTime":"","dayCmmtkt":"","monthCmmtkt":"","metpay":"","spcmnt":"","institutionNm":"인천광역시 부평구시설관리공단","phoneNumber":"032-262-9220","latitude":"37.4934246","longitude":"126.7060426","referenceDate":"2021-01-04","insttCode":"3540000"},{"prkplceNo":"166-2-000040","prkplceNm":"경인로1024번길","prkplceSe":"공영","prkplceType":"노외","rdnmadr":"인천광역시 부평구 경인로1024번길 12-13(부개동) 일원","lnmadr":"인천광역시 부평구 부개동 240-5,6번지 일원","prkcmprt":"20","feedingSe":"3","enforceSe":"미시행","operDay":"평일+토요일+공휴일","weekdayOperOpenHhmm":"00:00","weekdayOperColseHhmm":"00:00","satOperOperOpenHhmm":"00:00","satOperCloseHhmm":"00:00","holidayOperOpenHhmm":"00:00","holidayCloseOpenHhmm":"00:00","parkingchrgeInfo":"유료","basicTime":"0","basicCharge":"0","addUnitTime":"0","addUnitCharge":"0","dayCmmtktAdjTime":"0","dayCmmtkt":"0","monthCmmtkt":"40000","metpay":"현금+카드","spcmnt":"","institutionNm":"인천광역시 부평구시설관리공단","phoneNumber":"032-262-9220","latitude":"37.486148","longitude":"126.7330149","referenceDate":"2021-01-04","insttCode":"3540000"}],"totalCount": "14969","numOfRows": "3","pageNo": "1"}}};
  const { response: { body: { items } } } = data;
  const addrList = items.map(item => item.rdnmadr);

  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 11
    };

    const map = new kakao.maps.Map(container, options);
    addrList.forEach((addr, i) => {
      geocoder.addressSearch(addr, (res, status) => {
        if (status = kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(res[0].y, res[0].x);
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            image: new kakao.maps.MarkerImage(markerStar, new kakao.maps.Size(24,35)) 
          });
        };
      });
    });
  }, []);

  return (
    <>
      <div id="map" style={{width:"500px", height:"400px"}}></div>
    </>
  )
}

export default Location;