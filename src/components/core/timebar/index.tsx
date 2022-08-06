import React, {FC, ReactNode} from 'react';
import CSS from "csstype";

interface TimeBarProps {
    count: number
}

const TimeBar: FC<TimeBarProps> = ({count}): JSX.Element => {
    const bar: CSS.Properties = {
        'width': '100%',
        'backgroundColor': '#D9D9D9'
    }

    const barFill = {
        'width': (count) + '%',
        'height': '12px',
        'backgroundColor': '#00FF66',
        'color': ' white',
        'padding ': '10px',
        'textAlign': 'right' as 'right',
        'transition': '0.2s linear 0s'
    }

    return (
        <div style={bar}>
            <div style={barFill}></div>
        </div>
    )
}
export default TimeBar