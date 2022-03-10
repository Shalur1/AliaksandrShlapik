import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Contacts from "./Contacts/Contacts";

let ProfileInfo = function (props) {
    let arr = props.props.contacts
    let newArr = Object.keys(arr).map(function (key) {
        if (arr[key] === null) {
            return null
        } else return {type: key, name: arr[key]};
    });
    return (
        <div className={s.ProfileInfo}>
            <img className={s.img}
                 src={props.props.photos.large != null ? props.props.photos.large
                     : 'https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A='}
                 alt=""/>
            <div className={s.CreatorInfo}>
                <p className={s.name}>{props.props.fullName}</p>
                <ProfileStatus params={props.props.params} status={props.props.status}
                               updateStatus={props.props.UpdateStatus}/>
                <p>{props.props.aboutMe}</p>
                <Contacts className={s.Contacts} arr={newArr} />
            </div>
        </div>
    )
}

export default ProfileInfo;