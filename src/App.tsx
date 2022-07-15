import React from "react";
import Map, { Layer } from "react-map-gl";

import "./App.css";
import precincts from "./precincts.geojson";

import { MAPBOX_TOKEN } from "./tokens";

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
            <Layer
              {...{
                id: "precinct_lines",
                type: "line",
                source: precincts,
                paint: {
                  "line-color": "#0075DB",
                },
              }}
            />
          </Map>
        </section>
      </div>
    );
  }
}

export default App;
