import React, {useEffect} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import Room from './room.svg'
import TimeBar from "../../core/timebar";
import {useAppDispatch, useAppSelector} from "../../../redux/Hooks";
import {
    incrementCounter,
    pauseTime,
    resetCounter,
    resumeTime,
    setGlobalTimeOutId
} from '../../../redux/slices/TimeSlice'

const StartView = () => {
    const counter = useAppSelector((state) => state.timer.counter)
    const timeInterval = useAppSelector((state) => state.timer.timeInterval)
    const isPaused = useAppSelector((state) => state.timer.isPaused)
    const globalTimeOutId = useAppSelector((state) => state.timer.globalTimeOutId)
    const dispatch = useAppDispatch()

    const startCounter = () => {
        dispatch(resumeTime())
        clearTimeout(globalTimeOutId)
        if (counter > 100) {
            dispatch(resetCounter())
        }
        dispatch(setGlobalTimeOutId(setTimeout(() => dispatch(incrementCounter()), timeInterval) as unknown as number))
    }

    const pause = () => {
        clearTimeout(globalTimeOutId)
        dispatch(pauseTime())
    }

    const reset = () => {
        clearTimeout(globalTimeOutId)
        dispatch(resetCounter())
    }

    useEffect(() => {
        if (!isPaused) startCounter()
    }, [counter])

    return (
        <CenterMarginLayout>
            <button onClick={startCounter}>start game</button>
            <button onClick={reset}>reset</button>
            <button onClick={pause}>||</button>
            <span>{counter}</span>
            <img src={Room} alt=""/>
            <TimeBar count={counter}/>
        </CenterMarginLayout>
    )
}

export default StartView