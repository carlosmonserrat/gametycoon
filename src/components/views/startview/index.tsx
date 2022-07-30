import React, {useEffect, useRef, useState} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";

const StartView = () => {
    const [count, setCount] = useState(0)
    const [paused, setPaused] = useState(true)
    const [timer, setTimer] = useState(0)

    const displayTime = useRef(null)

    const startCounter = () => {
        setPaused(false)
        if (count > 15) {
            setCount(1)
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
            <h1>Hello</h1>
            <button onClick={startCounter}>start</button>
            <button onClick={reset}>reset</button>
            <button onClick={pause}>||</button>
            <span ref={displayTime}>{count}</span>
        </CenterMarginLayout>
    )

}

export default StartView