import { useEffect } from 'react';

import CSVFile from './CSVFile';

function CSVRoot({ getRootProps, zoneHover, acceptedFile, ...fileProps }: any) {
    return (
        <div className={`CSVReader-zone ${zoneHover ? 'CSVReader-zoneHover' : ''}`}
            {...getRootProps()}
        >
            {acceptedFile ? <CSVFile acceptedFile={acceptedFile} {...fileProps} /> : 'Drop CSV file here or click to upload'}
        </div>
    )
}

export function getCSVRoot({ setCsvFile, ...extraProps }: any) {
    return (props: any) => {
        const { acceptedFile } = props;
        useEffect(() => { setCsvFile(acceptedFile) }, [acceptedFile])
        return (
            <CSVRoot {...props} {...extraProps} />
        );
    };
}
