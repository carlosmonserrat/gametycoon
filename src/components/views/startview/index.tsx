import React, {useState, useEffect, useContext} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import style from "./style.module.css"

const StartView = () => {

    const [timeLeftState, setTimeLeftState] = useState(0)

    const timeDelay = 5000

    let startTime = 0
    let timeLeft = 0
    let timeId = 0

    const endGame = () => {
        alert(`game over! ${timeLeft}`)
    }

    const startGame = () => {
        startTime = new Date() as unknown as number
        timeLeft = timeDelay
       // setTimeLeftState(timeLeft)
        timeId = setTimeout(endGame, timeDelay) as unknown as number
    }

    const pauseGameTimer = () => {
        let currentTime = new Date() as unknown as number
        timeLeft -= (currentTime - startTime)
        clearTimeout(timeId)
        //  setTimeLeftState(timeLeft)
        alert(`game is freeze ${timeLeft}`)
    }

    const resumeGameTimer = () => {
        console.log(timeLeft)
        startTime = new Date() as unknown as number
        timeId = setTimeout(endGame, timeLeft) as unknown as number
    }

    return (
        <CenterMarginLayout>
            <h1>Serious dev</h1>
            time: {timeLeftState}
            <br/>
            <button onClick={startGame} className={style.button}>Start</button>
            <br/>
            <br/>
            <button onClick={pauseGameTimer} className={style.button}>pause</button>
            <button onClick={resumeGameTimer} className={style.button}>resume</button>
        </CenterMarginLayout>
    )
}

export default StartView