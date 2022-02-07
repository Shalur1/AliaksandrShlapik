import React from "react";
import s from './Comments.module.css'
import Comment from "./comment/Comment";


function Comments(props) {
    return(
        <div className={s.Comments}>
            <Comment comments={props.comments}/>
        </div>
    )
}

export default Comments;