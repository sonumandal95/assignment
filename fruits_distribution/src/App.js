import './App.css';
import Papa from "papaparse";
import convertCsvToJson from '../src/utils/convert';
import { useState } from 'react';
import MapWrapper from './components/CustomMap/MapWrapper'
// import { csvParseRows, csvParse } from 'd3-dsv';

function App() {
  const [locations, setLocations] = useState([]);

  const load = () => {
    // can use an api to get the data from backend
    const response =
      fetch('WONDR103_heatmap_data.csv')
        .then(response => response.text())
        .then(v => {
          let csvData = Papa.parse(v).data;
          const data = convertCsvToJson(csvData);
          console.log("data: ", data)
          setLocations(data);
        })
        .catch(err => console.log(err));
  }

  return (
    <div style={{padding: '10px'}}>
      <h2>Fruit distribution map view</h2>
      <p>Click on the below button to see the marker on the map. Having some performance issue with the map when using large number of markers, this is issue with the package I am using.</p>
      <p>Map zoom is  set to 20, so it will take some time to load the map.</p>
      <button style={{marginBottom: '10px'}} onClick={load}>Click to View</button>
      <MapWrapper locationData={locations}></MapWrapper>
      <div id="map"></div>
    </div>
  );
}
export default App;
