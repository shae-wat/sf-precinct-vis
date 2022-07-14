import React from "react";
import Map from "react-map-gl";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SF Precinct Vis</p>
      </header>

      <Map
        initialViewState={{
          longitude: -122,
          latitude: 37,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
