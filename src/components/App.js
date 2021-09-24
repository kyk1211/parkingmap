import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Header from "./Header";
import Location from "./Location";
import Menu from "./Menu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const pageNo = 0;
    const numOfRows = 100;
    const url = `/tn_pubr_prkplce_info_api?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`
    const response = await axios.get(url);
    console.log(response);
  };
  return (
    <div className="App" >
      <Header />
      <Location />
      <Menu />
    </div>
  );
}

export default App;
