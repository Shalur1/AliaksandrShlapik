import React from "react";
import s from './Firstline.module.css'
import Post from "../../../../post/post";

const Firstline = React.memo((props) => {
    return (
        <div className={s.Firstline}>
            <Post posts={props.posts}/>
        </div>

    );
})

export default Firstline;