import React from 'react';
import style from './style.module.css';
import StartView from "../components/views/startview";

const Index = () => {
    return (
        <div className={style.App}>
            <StartView/>
        </div>
    );
}

export default Index;
