import React, {useEffect, useState} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import Room from './room.svg'
import TimeBar from "../../core/timebar";

const StartView = () => {
    const [count, setCount] = useState(0)
    const [paused, setPaused] = useState(true)
    const [timer, setTimer] = useState(0)

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


    return (
        <CenterMarginLayout>
            <button onClick={startCounter}>SELECT JOB</button>
            <button onClick={reset}>reset</button>
            <button onClick={pause}>||</button>
            <span>{count}</span>
            <img src={Room} alt=""/>
            <TimeBar count={count}/>
        </CenterMarginLayout>
    )
}

export default StartView