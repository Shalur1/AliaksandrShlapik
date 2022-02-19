let initialState = {
    ProfileInfo: {},
    isFetchin: true
}


const typeSetProfileInfo = 'SET-PROFILE-INFO'
const typeSetIsFetching = 'SET-IS-FETCHING'


const ProfileReducer = function (state = initialState, action) {
    if (action.type === typeSetProfileInfo){
        return {
            ...state,
            ProfileInfo: action.ProfileInfo
        }
    }
    else if (action.type === typeSetIsFetching){
        return {
            ...state,
            isFetchin: action.isFetching
        }
    }
    else return state
}


export const SetProfileInfo = function (ProfileInfo) {
    debugger
    console.log(ProfileInfo)
    return {
        type: typeSetProfileInfo, ProfileInfo
    }
}

export const SetIsFetching = function (isFetching) {
    return{
        type: typeSetIsFetching, isFetching
    }
}

export default ProfileReducer
