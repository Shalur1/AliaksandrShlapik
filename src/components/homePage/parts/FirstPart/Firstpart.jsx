import React from "react";
import s from './Firstpart.module.css'
import Firstline from "./Firstline/Firstline";
import Secondline from "./Secondline/Secondline";
import Thirdline from "./Thirdline/Thirdline";

function FirstPart(props) {
    return (
        <div className={s.Firstpart}>
            <Firstline posts={props.posts}/>
            <Secondline posts={props.posts}/>
            <Thirdline posts={props.posts}/>
        </div>
    );
}

export default FirstPart;