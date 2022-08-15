import { Layer } from "react-map-gl";

function lineLayer(source: string) {
    return {
        id: "line_layer",
        source,
        type: "line" as "sky",
        paint: {
            'line-width': 1,
            'line-color': "#0075DB",
        },
    };
}

function PrecinctLayer(props: { source: string }) {
    const { source } = props;
    return (
        <Layer {...lineLayer(source)} />
    )
}

export default PrecinctLayer;
