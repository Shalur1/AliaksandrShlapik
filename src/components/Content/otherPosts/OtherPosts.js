import React from "react";
import s from './OtherPosts.module.css'
import '../Content_id1.module.css'
import Post from "../../post/post";
    function OtherPosts(props) {
        return (
            <aside className={s.OtherPosts}>
                <h2>Связанные темы</h2>
                <Post posts={props.postsSvyazannue}/>
                <h2>Recomended</h2>
                <Post posts={props.postsRecomended}/>
            </aside>
        );
    }

export default OtherPosts;
