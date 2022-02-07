import React from "react";
import s from'./homePage.module.css'
import Parts from "./parts/parts";

function HomePage(props) {
    return (
        <div className={s.homePage}>
            <Parts posts={props.posts}/>
        </div>
    );
}

export default HomePage;