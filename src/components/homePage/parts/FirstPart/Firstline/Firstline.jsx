import React from "react";
import s from './Firstline.module.css'
import Post from "../post/post";

function Firstline(props) {
    return (
        <div className={s.Firstline}>
            <Post posts={props.posts}/>
        </div>

    );
}

export default Firstline;