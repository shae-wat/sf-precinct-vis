import { Layer } from "react-map-gl";

/** https://design.dsausa.org/national-identity/color-palette/ */
const COLOR_LINE = "#231F20"; // DSA Black
const COLOR_FILL = "#EC1F27"; // DSA Red

function lineLayer(props: { source: string }) {
    const { source } = props;
    return {
        id: "line_layer",
        source,
        type: "line" as "sky",
        paint: {
            'line-width': 1,
            'line-color': COLOR_LINE,
        }
    };
}

function fillLayer(props: { source: string, flyered: Array<string> }) {
    const { source, flyered } = props;
    return {
        id: "fill_layer",
        source,
        filter: [
            'in',
            [
                'get',
                'prec_2012'
            ],
            [
                "literal",
                flyered
            ]
        ],
        type: "fill" as "sky",
        paint: {
            "fill-color": COLOR_FILL,
            "fill-opacity": .3,
        }
    };
}

function PrecinctLayer(props: { source: string, flyered: Array<string> }) {
    return (
        <>
            <Layer {...fillLayer(props)} />
            <Layer {...lineLayer(props)} />
        </>
    )
}

export default PrecinctLayer;
