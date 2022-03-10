import React from "react";
import Post from "./post/post";
import OtherPosts from "./otherPosts/OtherPosts";
import s from './Content_id1.module.css'
import Comments from "./comments/Comments";
import InputCommentsConteiner from "./inputComment/inputCommentsConteiner";


const Main = ((props) => {
    debugger
    return (
        <main className={s.Main}>
            <Post/>
            <OtherPosts postsRecomended={props.store.getState().homePage.postsFirstLine}
                        postsSvyazannue={props.store.getState().homePage.postsSecondLine}/>
            <InputCommentsConteiner store={props.store}/>
            <Comments comments={props.store.getState().contentPage.comments}/>
        </main>
    );
})

export default Main;