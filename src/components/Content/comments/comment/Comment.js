import React from "react";
import s from './Comment.module.css'


function Comment(props) {
    return (props.comments.map(item =>
        <div className={s.Comment}>
            <img src={item.src} alt=""/>
            <p className={s.p}>{item.p}</p>
            <p className={s.p1}>{item.p1}</p>
        </div>
    ))
}

export default Comment;