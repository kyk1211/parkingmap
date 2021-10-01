import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataSelector, callData } from "../slices/dataSlice";
import Menu from "./Menu";
import Location from "./Location";
import InfoTable from "./InfoTable";

const pageNo = 0;
const numOfRows = 100;

function App() {
  const { loading } = useSelector(dataSelector);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(callData(pageNo, numOfRows))
  }, [dispatch])

  return (
    <div className="App" style={{backgroundColor: '#ADD8E6'}}>
      <Menu />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {loading ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : <Location />}
        <InfoTable />
      </div>
    </div>
  );
}

export default App;
