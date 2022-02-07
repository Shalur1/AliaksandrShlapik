let initialState = {
    creators: []
}

const typeFollow = 'FOLLOW'
const typeUnFollow = 'UN-FOLLOW'
const typeSetCreators = 'SET-CREATORS'

const CreatorReducer = function (state = initialState, action) {
    if (action.type === typeFollow) {
        debugger
        return {
            ...state, creators: state.creators.map(function (u) {
                if (u.id === action.userID) {
                    return {...u, followed: true};
                } else return u;
            })
        };
    } else if (action.type === typeUnFollow) {
        debugger
        return {
            ...state, creators: state.creators.map(function (u) {
                if (u.id === action.userID) {
                    return {...u, followed: false};
                } else return u;
            })
        }
    }
    else if (action.type === typeSetCreators){
        return {
            ...state,
            creators: action.creators
        }
    }
    else return state;
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


export default CreatorReducer;