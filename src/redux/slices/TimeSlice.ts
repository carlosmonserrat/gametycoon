import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../redux/Store'

interface TimerState {
    counter: number
    isPaused: boolean
    globalTimeOutId: number
    timeInterval: number
}

const initialState: TimerState = {
    counter: 0,
    isPaused: false,
    globalTimeOutId: 0,
    timeInterval: 1000
}

export const timerSlice = createSlice({
    name: 'timer',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1
        },
        pauseTime: (state) => {
            state.isPaused = true
        },
        setGlobalTimeOutId: (state, action: PayloadAction<number>) => {
            state.globalTimeOutId = action.payload
        },
        setTimeInterval: (state, action: PayloadAction<number>) => {
            state.globalTimeOutId = action.payload
        },
    },
})

export const {incrementCounter, pauseTime, setGlobalTimeOutId, setTimeInterval} = timerSlice.actions
