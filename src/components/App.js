import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Location from "./Location";
import InfoTable from "./InfoTable";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const pageNo = 0;
    const numOfRows = 20;
    const url = `/tn_pubr_prkplce_info_api?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`
    const response = await axios.get(url);
    //주차장 데이터
    const { data: { response: { body: { items } } } } = response;
    setIsLoading(false);
    setData(items);
  };

  return (
    <div className="App" >
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {isLoading ? <h1>Loading...</h1> : <Location data={data}/>}
        <InfoTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
