import React from "react";
import s from './Thirdline.module.css'
import Post from "../../../../post/post";


const Thirdline = React.memo((props) => {
    return (
        <div className={s.Thirdline}>
            <Post posts={props.posts}/>
        </div>
    );
})

export default Thirdline;