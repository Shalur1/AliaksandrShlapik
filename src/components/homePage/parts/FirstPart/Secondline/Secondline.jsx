import React from "react";
import s from './Secondline.module.css'
import Post from "../post/post";


function Secondline(props) {
    return (<div className={s.Secondline}>
        <Post posts={props.posts}/>
    </div>);
}

export default Secondline;