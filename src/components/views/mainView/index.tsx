import React, {useEffect} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";

import TimeBar from "../../core/timebar";
import {useAppDispatch, useAppSelector} from "../../../redux/Hooks";
import {
    incrementCounter,
    pauseTime,
    resetCounter,
    resumeTime,
    setGlobalTimeOutId
} from '../../../redux/slices/TimeSlice'
import CSS from "csstype";
import BalanceSheet from "../../core/balancesheet";
import BasicComputer from "../../core/computers/basic";
import BasementRoom from "../../core/rooms/basement";
import TableObject from "../../core/objects/table";

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

    const buttonStart: CSS.Properties = {
        'cursor': 'pointer',
        'fontSize': '16px',
        'fontWeight': '400',
        'position': 'absolute',
        'right': '0',
        'border': 'none',
        'color': 'white',
        'backgroundColor': 'rgba(0,0,0,0)'
    }

    return (
        <CenterMarginLayout>
            {!isPaused ? <></> : <button style={buttonStart} onClick={startCounter}>Start new game</button>}
            {/*<button onClick={reset}>reset</button>*/}
            {/*<button onClick={pause}>||</button>*/}
            <div style={{'color': 'white'}}>Days: {counter}</div>
            <div style={{'textAlign': 'center'}}>

                <BasementRoom>
                    <div><BasicComputer/></div>
                    <TableObject/>
                </BasementRoom>

            </div>
            <BalanceSheet current={10} expensesMonth={-1000} nextMonthMoney={-990}/>
            {isPaused ? <></> : <TimeBar count={counter}/>}
        </CenterMarginLayout>
    )
}

export default StartView