import React, {ReactNode} from 'react';
import CSS from "csstype";

type Props = {
    children?: ReactNode;
}

const CenterMarginLayout = ({children}: Props) => {
    const layout: CSS.Properties = {
        'margin': ' 20vh auto',
        'width': '100%',
        'maxWidth': '1200px',
        'position': 'relative',
    }

    return (
        <div style={layout}>
            {children}
        </div>
    )
}

export default CenterMarginLayout