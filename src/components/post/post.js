import React from "react";
import s from './post.module.css'
import {NavLink} from "react-router-dom";

function Post(props) {
    let PostElements = props.posts.map(item =>
        <div className={s.Post}>
            <img src={item.src} alt=""/>
            <NavLink to={item.link} className={s.firstparagraph}>{item.p1}</NavLink>
            <p className={s.secondparagraph}>{item.p2}</p>
            <p className={s.thirdparagraph}>{item.p3}</p>
        </div>
    )
    return (
        PostElements
    );
}

export default Post;

