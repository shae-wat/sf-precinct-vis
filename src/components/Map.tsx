import MapGl, { Source } from "react-map-gl";
import { MAPBOX_TOKEN } from "../tokens";

import PrecinctLayer from './PrecinctLayer';

const INITIAL_VIEW_STATE = {
    latitude: 37.7596,
    longitude: -122.432,
    zoom: 12,
}

function Map() {
    const features = require('../precincts.geojson');
    const source = "precinctSource";
    return (
        <section className="Map-container">
            <MapGl
                initialViewState={{ ...INITIAL_VIEW_STATE }}
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Source id={source} type="geojson" data={features}>
                    <PrecinctLayer source={source} />
                </Source>
            </MapGl>
        </section>
    )
}

export default Map;
