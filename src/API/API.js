import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": '36baea85-6da4-4f85-aee8-a683e125e6d8'
        }
    }
)

export const usersAPI = {
    GetCreatorInfo(uID) {
        return instance.get(`profile/${uID}`)
            .then(response => {
                    return response.data
                }
            )
    },
    GetCreators(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                    return response.data
                }
            )
    },
    PageBack(pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber - 1}`,)
            .then(response => {
                    return response.data
                }
            )
    },
    PageNext(pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber + 1}`,)
            .then(response => {
                    return response.data
                }
            )
    },
    Follow(userID) {
        return instance.post(`follow/${userID}`, {})
    },
    UnFollow(userID) {
        debugger
        return instance.delete(`follow/${userID}`)
    },
    auth(){
        return instance.get('auth/me')
    },
    GetStatus(uID){
        return instance.get(`profile/status/${uID}`)
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status})
    },
    login(email, password){
        return instance.post(`/auth/login`, {email: email, password: password})
    },
    logOut(){
        return instance.delete(`/auth/login`)
    }
}


