import React, {useEffect, useRef, useState} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import Room from './room.svg'
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
        <CenterMarginLayout>
            <button onClick={startCounter}>run</button>
            <button onClick={reset}>reset</button>
            <button onClick={pause}>||</button>
            <span ref={displayTime}>{count}</span>
            <img src={Room} alt=""/>
            <div style={bar}>
                <div style={barFill}></div>
            </div>
        </CenterMarginLayout>
    )
}

export default StartView