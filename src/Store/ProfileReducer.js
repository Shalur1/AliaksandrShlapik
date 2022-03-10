import {usersAPI} from "../API/API";
import store from "./redux-store";

let initialState = {
    ProfileInfo: {},
    isFetchin: true,
    status: ''
}


const typeSetProfileInfo = 'profile/SET-PROFILE-INFO'
const typeSetIsFetching = 'profile/SET-IS-FETCHING'
const typeSetStatus = 'profile/SET-STATUS'

const ProfileReducer = function (state = initialState, action) {
    if (action.type === typeSetProfileInfo) {
        return {
            ...state,
            ProfileInfo: action.ProfileInfo
        }
    } else if (action.type === typeSetIsFetching) {
        return {
            ...state,
            isFetchin: action.isFetching
        }
    } else if (action.type === typeSetStatus) {
        return {
            ...state,
            status: action.status
        }
    } else return state
}


export const SetProfileInfo = function (ProfileInfo) {
    return {
        type: typeSetProfileInfo, ProfileInfo
    }
}

export const SetIsFetching = function (isFetching) {
    return {
        type: typeSetIsFetching, isFetching
    }
}

export const SetStatus = function (status) {
    return {
        type: typeSetStatus, status
    }
}

export const GetProfileInfo = async (uID) => {
    store.dispatch(SetIsFetching(true));
    let response = await usersAPI.GetCreatorInfo(uID);
        store.dispatch(SetProfileInfo(response));
        store.dispatch(SetIsFetching(false));
}

export const GetStatus = async (uID) => {
    let response = await usersAPI.GetStatus(uID);
        store.dispatch(SetStatus(response.data));
}

export const UpdateStatus = async (status) => {
    let response = await usersAPI.updateStatus(status)
        if (response.status === 200){
            store.dispatch(SetStatus(status));
        }
        else {
            return
        }
}

export default ProfileReducer
