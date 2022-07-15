import React from "react";
import Map, { Layer } from "react-map-gl";

import "./App.css";

import { MAPBOX_TOKEN } from "./tokens";

const precintLayer = {
  id: "precinct_layer",
  source: "./precincts.geojson",
  "source-layer": "./precincts.geojson",
  type: "line" as "sky",
  paint: {
    "fill-color": "#0075DB",
  },
};

class App extends React.Component {
  render() {
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
          >
            <Layer {...precintLayer} />
          </Map>
        </section>
      </div>
    );
  }
}

export default App;
