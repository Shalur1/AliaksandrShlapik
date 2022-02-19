let initialState = {
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
    },
    isFetchin: false,
    isAuth: false
}

const typeSetUserData = 'SET-USER-DATA'
const typeSetIsFetching = 'SET-IS-FETCHING'

const authReducer = function (state = initialState, action) {
    debugger
    if (action.type === typeSetUserData){
        return {
            ...state,
            data: action.data,
            isAuth: true
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


export const SetUserData = function (data) {
    debugger
    return {
        type: typeSetUserData, data
    }
}
export const SetIsFetching = function (isFetching) {
    return{
        type: typeSetIsFetching, isFetching
    }
}

export default authReducer
