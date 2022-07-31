import React, {useEffect, useRef, useState} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import CSS from 'csstype';

const StartView = () => {
    const [count, setCount] = useState(0)
    const [paused, setPaused] = useState(true)
    const [timer, setTimer] = useState(0)

    const displayTime = useRef(null)

    const startCounter = () => {
        setPaused(false)
        if (count > 100) {
            setCount(0)
        }
        setTimer(setTimeout(() => setCount(count + 1), 1000) as unknown as number)
    }

    const pause = () => {
        clearTimeout(timer)
        setPaused(true)
    }

    const reset = () => {
        clearTimeout(timer)
        setCount(0);
    }

    useEffect(() => {
        if (!paused) startCounter()
    }, [count, paused])

    const bar: CSS.Properties = {
        'width': '100%',
        'backgroundColor': '#ddd'
    }

    const barFill = {
        'width': (count  ) + '%',
        'backgroundColor': '#04AA6D',
        'color': ' white',
        'padding ': '10px',
        'textAlign': 'right' as 'right',
        'transition': '0.2s linear 0s'
    }

    return (
        <CenterMarginLayout>
            <h1>Hello</h1>
            <button onClick={startCounter}>start</button>
            <button onClick={reset}>reset</button>
            <button onClick={pause}>||</button>
            <span ref={displayTime}>{count}</span>
            <div style={bar}>
                <div style={barFill}>  {(count ) + '%'}  </div>
            </div>
        </CenterMarginLayout>
    )

}

export default StartView