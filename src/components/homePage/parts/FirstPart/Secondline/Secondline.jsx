import React from "react";
import s from './Secondline.module.css'
import Post from "../../../../post/post";


const Secondline = React.memo((props) => {
    return (<div className={s.Secondline}>
        <Post posts={props.posts}/>
    </div>);
})

export default Secondline;