import React from "react";
import Map from "react-map-gl";

import "./App.css";

import { MAPBOX_TOKEN } from "./tokens";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SF Precinct Vis</p>
      </header>
      <section className="Map-container">
        <Map
          initialViewState={{
            latitude: 37.7596,
            longitude: -122.432,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxAccessToken={MAPBOX_TOKEN}
        ></Map>
      </section>
    </div>
  );
}

export default App;
