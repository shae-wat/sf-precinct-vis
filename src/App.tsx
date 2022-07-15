import React from "react";
import Map, { Marker } from "react-map-gl";

import "./App.css";

import { MAPBOX_TOKEN } from "./tokens";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SF Precinct Vis</p>
      </header>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  );
}

export default App;
