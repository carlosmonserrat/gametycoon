import React, {useState} from "react";
import CenterMarginLayout from "../../layout/centermarginlayout";
import style from "./style.module.css"

const StartView = () => {

    const [timeId, setTimeId] = useState(0);
    const [gameTime, setGameTime] = useState(5000);
    const [remainingTime, setRemainingTime] = useState(0);

    const startGame = () => {
        alert("game!")
    }

    const getJob = () => {

    }

    const startGameTimer = () => {
        let timeId: number = setTimeout(startGame, gameTime) as unknown as number
        setTimeId(timeId)
    }

    const pauseGameTimer = () => {
        clearTimeout(timeId)
        alert("game is freeze")
    }

    const resumeGameTimer = () => {

    }

    return (
        <CenterMarginLayout>

            <h1>Serious dev</h1>

          time:  {timeId}

            <br/>

            <button onClick={startGameTimer} className={style.button}>Start</button>
            <br/>
            <br/>
            <button onClick={pauseGameTimer} className={style.button}>get job</button>
        </CenterMarginLayout>
    )
}


export default StartView