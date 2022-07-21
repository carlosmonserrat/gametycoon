import React, {ReactNode} from 'react';
import style from "./style.module.css"

type Props = {
    children?: ReactNode;
}

const CenterMarginLayout = ({children}: Props) => {
    return (
        <div className={style.layout}>
            {children}
        </div>
    )
}

export default CenterMarginLayout