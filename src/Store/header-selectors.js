export const getData = (state) =>{
    return state.auth.data
}

export const getIsFetchin = (state) =>{
    return state.auth.isFetchin
}

export const getIsAuth = (state) =>{
    return state.auth.isAuth
}

export const getUserId = (state) =>{
    return state.auth.data.id
}