import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataSelector, callData } from "../slices/dataSlice";
import Header from "./Header";
import Location from "./Location";
import InfoTable from "./InfoTable";

function App() {
  const { data, loading } = useSelector(dataSelector); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callData())
  }, [dispatch])

  return (
    <div className="App" style={{backgroundColor: '#ADD8E6'}}>
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {loading ? <h1>Loading...</h1> : <Location data={data}/>}
        <InfoTable data={data} isLoading={loading} />
      </div>
    </div>
  );
}

export default App;
