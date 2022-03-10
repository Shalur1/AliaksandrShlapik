import React from "react";
import s from './Firstpart.module.css'
import Firstline from "./Firstline/Firstline";
import Secondline from "./Secondline/Secondline";
import Thirdline from "./Thirdline/Thirdline";

const FirstPart = function (props) {
    return (
        <div className={s.Firstpart}>
            <Firstline posts={props.props.posts.postsFirstLine}/>
            <Secondline posts={props.props.posts.postsSecondLine}/>
            <Thirdline posts={props.props.posts.postsThirdLine}/>
        </div>
    );
}

export default FirstPart;