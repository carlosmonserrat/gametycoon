import React from "react";
import "./styles.css"

const Guy = (): JSX.Element => {
    return (
        <div className="character">
            <img src={require("./guy.png")} className="characterRender  work" alt=""/>
        </div>
    )
}

export default Guy
