import { useState } from 'react';
import { lightenDarkenColor } from 'react-papaparse';

const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
    DEFAULT_REMOVE_HOVER_COLOR,
    40
);

function RemoveButton({ getRemoveFileProps, Remove }: any) {
    const [removeHoverColor, setRemoveHoverColor] = useState(
        DEFAULT_REMOVE_HOVER_COLOR
    );
    return (
        <div className='CSVReader-remove'
            {...getRemoveFileProps()}
            onMouseOver={(event: Event) => {
                event.preventDefault();
                setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
            }}
            onMouseOut={(event: Event) => {
                event.preventDefault();
                setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
            }}
        >
            <Remove color={removeHoverColor} />
        </div>
    )
}

function CSVFile({ acceptedFile, ProgressBar, getRemoveFileProps, Remove }: any) {
    return (
        <div className='CSVReader-file'>
            <span className='CSVReader-filename'>{acceptedFile.name}</span>
            <ProgressBar className='CSVReader-progressBar' />
            <RemoveButton getRemoveFileProps={getRemoveFileProps} Remove={Remove} />
        </div>
    )
}

export default CSVFile;
