import { useState } from 'react';
import { useCSVReader } from 'react-papaparse';

import './CSVReader.css';
import { getCSVRoot } from './CSVRoot';

/**
 * This module is based on an example from https://react-papaparse.js.org/
 */
export default function CSVReader(props: { onUploadAccepted: Function, setCsvFile: Function }) {
    const { onUploadAccepted, setCsvFile } = props;
    const { CSVReader } = useCSVReader();
    const [zoneHover, setZoneHover] = useState(false);

    return (
        <section className="CSVReader">
            <CSVReader config={{ header: true, delimiter: ',' }}
                onUploadAccepted={(results: any) => {
                    onUploadAccepted(results);
                    setZoneHover(false);
                }}
                onDragOver={(event: DragEvent) => {
                    event.preventDefault();
                    setZoneHover(true);
                }}
                onDragLeave={(event: DragEvent) => {
                    event.preventDefault();
                    setZoneHover(false);
                }}
            >
                {getCSVRoot({
                    zoneHover,
                    setCsvFile
                })}
            </CSVReader>
        </section>
    );
}
