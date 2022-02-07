import React from "react";
import s from './OtherPosts.module.css'
import '../Content_id1.module.css'
import Post from "../../homePage/parts/FirstPart/post/post";
    function OtherPosts(props) {
        return (
            <aside className={s.OtherPosts}>
                <Post posts={props.posts}/>
                <h2>Связанные темы</h2>
                <Post posts={props.posts}/>
            </aside>
        );
    }

export default OtherPosts;
