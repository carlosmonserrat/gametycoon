import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

interface TimerState {
    counter: number
    isPaused: boolean
    globalTimeOutId: number
    timeInterval: number
}

const initialState: TimerState = {
    counter: 0,
    isPaused: true,
    globalTimeOutId: 0,
    timeInterval: 1000
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1
        },
        pauseTime: (state) => {
            state.isPaused = true
        },
        resumeTime: (state) => {
            state.isPaused = false
        },
        setGlobalTimeOutId: (state, action: PayloadAction<number>) => {
            state.globalTimeOutId = action.payload
        },
        resetCounter: (state) => {
            state.counter = 0
        },
        setTimeInterval: (state, action: PayloadAction<number>) => {
            state.timeInterval = action.payload
        },
    },
})

export const {
    incrementCounter,
    pauseTime,
    setGlobalTimeOutId,
    setTimeInterval,
    resetCounter,
    resumeTime
} = timerSlice.actions
export default timerSlice.reducer
