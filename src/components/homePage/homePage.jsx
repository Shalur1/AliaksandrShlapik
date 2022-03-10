import React from "react";
import s from './homePage.module.css'
import Parts from "./parts/parts";

const HomePage = function(props) {
    return (
        <div className={s.homePage}>
            <Parts props={props}/>
        </div>
    );
}

export default HomePage;