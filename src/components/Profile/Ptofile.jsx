import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = function (props) {
    return(
        <div>
            <ProfileInfo props={props.props}/>
            <div className={s.posts}>
                <p>Posts</p>
            </div>
        </div>
    )
}

export default Profile;