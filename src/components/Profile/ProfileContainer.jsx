import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import post from "../post/post";

let Profile = function (props) {
    console.log(props)
    return(
        <div>
            <ProfileInfo/>
            <div className={s.posts}>
                <p>Posts</p>
            </div>
        </div>
    )
}

export default Profile;