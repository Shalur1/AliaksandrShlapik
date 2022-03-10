import {usersAPI as userAPI} from "../API/API";
import store from "./redux-store";

let initialState = {
    creators: [],
    pageSize: 8,
    totalCreatorsCount: 20,
    currentPage: 1,
    isFetchinCreators: true,
    isFetchingFollowed: []
};

const typeFollow = 'creators/FOLLOW'
const typeUnFollow = 'creators/UN-FOLLOW'
const typeSetCreators = 'creators/SET-CREATORS'
const typePageBack = 'creators/PAGE-BACK'
const typePageNext = 'creators/PAGE-NEXT'
const TypeSetIsFetching = 'creators/IS-FETCHING'
const typeSetIsFetchingFollowed = 'creators/TYPE-IS-Fetching-FOLLOWED'


const CreatorReducer = function (state = initialState, action) {
    if (action.type === typeFollow) {
        return {
            ...state,
            creators: state.creators.map(function (u) {
                if (u.id === action.userID) {
                    return {...u, followed: true};
                } else return u;
            })
        }
    } else if (action.type === typeUnFollow) {
        return {
            ...state,
            creators: state.creators.map(function (u) {
                if (u.id === action.userID) {
                    return {...u, followed: false};
                } else return u;
            })
        }
    } else if (action.type === typeSetCreators) {
        return {
            ...state,
            creators: action.creators
        }
    } else if (action.type === typePageBack) {
        return {
            ...state,
            currentPage: action.currentPage - 1
        }
    } else if (action.type === typePageNext) {
        return {
            ...state,
            currentPage: action.currentPage + 1
        }
    } else if (action.type === TypeSetIsFetching) {
        return {
            ...state,
            isFetchinCreators: action.isFetching
        }
    } else if (action.type === typeSetIsFetchingFollowed) {
        debugger
        return {
            ...state,
            isFetchingFollowed: action.creatorID !== null ? [...state.isFetchingFollowed, action.creatorID]
                : []
        }
    } else return state;
}

export const Follow = function (userID) {
    return {
        type: typeFollow, userID
    }
}
export const UnFollow = function (userID) {
    return {
        type: typeUnFollow, userID
    }
}
export const SetCreators = function (creators) {
    return {
        type: typeSetCreators, creators
    }
}
export const pageBack = function (currentPage) {
    return {
        type: typePageBack, currentPage
    }
}
export const pageNext = function (currentPage) {
    return {
        type: typePageNext, currentPage
    }
}
export const SetIsFetching = function (isFetching) {
    return {
        type: TypeSetIsFetching, isFetching
    }
}
export const SetIsFetchingFollowed = function (creatorID) {
    debugger
    return {
        type: typeSetIsFetchingFollowed, creatorID
    }
}

export const getCreators = async (pageSize, currentPage) => {
    store.dispatch(SetIsFetching(true));
    let response = await userAPI.GetCreators(pageSize, currentPage);
    store.dispatch(SetCreators(response.items));
    store.dispatch(SetIsFetching(false));
}

export const pageNextThunk = async (pageSize, pageNumber) => {
    let response = await userAPI.PageNext(pageSize, pageNumber);
    store.dispatch(pageNext(pageNumber));
    store.dispatch(SetCreators(response.items));
}

export const pageBackThunk = async (pageSize, pageNumber) => {
    let response = await userAPI.PageBack(pageSize, pageNumber);
    store.dispatch(pageBack(pageNumber));
    store.dispatch(SetCreators(response.items));
}

export const FollowThunk = async (userID) => {
    store.dispatch(SetIsFetchingFollowed(userID));
    await userAPI.Follow(userID);
    store.dispatch(Follow(userID));
    store.dispatch(SetIsFetchingFollowed(null));
}

export const unFollowThunk = async (userID) => {
    store.dispatch(SetIsFetchingFollowed(userID));
    let response = await userAPI.UnFollow(userID);
    store.dispatch(UnFollow(userID));
    store.dispatch(SetIsFetchingFollowed(null));
}

export default CreatorReducer;