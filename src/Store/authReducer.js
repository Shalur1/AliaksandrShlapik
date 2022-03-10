import {usersAPI} from "../API/API";
import store from "./redux-store";

let initialState = {
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isFetchin: false,
    isAuth: false,
    LoginFormErrorMessage: null
}

const typeSetUserData = 'auth/SET-USER-DATA'
const typeSetIsFetching = 'auth/SET-IS-FETCHING'
const typeSetError = 'auth/SET-ERROR'

const authReducer = function (state = initialState, action) {
    if (action.type === typeSetUserData) {
        if (action.data.login === undefined) {
            return {
                ...state,
                data: action.data,
                isAuth: false
            }
        } else return {
            ...state,
            data: action.data,
            isAuth: true
        }
    } else if (action.type === typeSetIsFetching) {
        return {
            ...state,
            isFetchin: action.isFetching
        }
    } else if (action.type === typeSetError) {
        return {
            ...state,
            LoginFormError: action.tf,
            LoginFormErrorMessage: action.errorMessege
        }
    } else return state
}


export const SetUserData = function (data) {
    return {
        type: typeSetUserData, data
    }
}
export const SetIsFetching = function (isFetching) {
    return {
        type: typeSetIsFetching, isFetching
    }
}

export const SetErrorLoginForm = function (errorMessege) {
    return {
        type: typeSetError, errorMessege
    }
}

export const authThunk = async () => {
    let response = await usersAPI.auth()
    store.dispatch(SetUserData(response.data.data));
}

export const loginThunk = async (email, password) => {
    let response = await usersAPI.login(email, password)
    if (response.data.resultCode === 1) {
        store.dispatch(SetErrorLoginForm(response.data.messages[0]))
    } else {
        await authThunk();
        store.dispatch(SetErrorLoginForm(null))
    }
}


export const logOutThunk = async () => {
    await usersAPI.logOut()
    await authThunk()
}

export default authReducer
