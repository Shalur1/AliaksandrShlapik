import React, {useEffect} from "react";
import Profile from "./Ptofile";
import {connect} from "react-redux";
import {SetProfileInfo, SetIsFetching, GetProfileInfo, GetStatus, UpdateStatus} from "../../Store/ProfileReducer";
import Preloader from "../Preloader/Preloader";
import {useParams} from "react-router-dom";


let ProfilePage = (props) => {
    useEffect(() => {
        GetProfileInfo(props.params.routedUserId)
        GetStatus(props.params.routedUserId)
    }, [])

    return (<>
            {props.isFetchin ? <Preloader/> : <Profile props={props}/>}
        </>

    )
}

let mapStateToProps = function (state) {
    debugger
    return {
        aboutMe: state.ProfilePage.ProfileInfo.aboutMe,
        contacts: state.ProfilePage.ProfileInfo.contacts,
        lookingForAJob: state.ProfilePage.ProfileInfo.lookingForAJob,
        lookingForAJobDescription: state.ProfilePage.ProfileInfo.lookingForAJobDescription,
        fullName: state.ProfilePage.ProfileInfo.fullName,
        userId: state.ProfilePage.ProfileInfo.userId,
        photos: state.ProfilePage.ProfileInfo.photos,
        isFetchin: state.ProfilePage.isFetchin,
        status: state.ProfilePage.status
    }
}

let mapDispatchToProps = {
    SetProfileInfo,
    SetIsFetching,
    GetProfileInfo,
    GetStatus,
    UpdateStatus,
}

let RouterComponent = (props) => {
    return <ProfilePage {...props} params={useParams()}/>;
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(RouterComponent);

export default ProfileContainer;