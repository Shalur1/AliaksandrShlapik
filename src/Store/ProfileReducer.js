import comments from "../components/Content/comments/Comments";

let typeAddPost = 'ADD-COMMENT';
let typeEditCommInput = 'EDIT-COMM-INPUT';

let initialState = {
    newCommText: '',
    comments: [{
        id: 1,
        src: 'https://sun9-57.userapi.com/impg/kALQdbWK48yKlSa5L2SQiW-Q6ZTl_hyJpoOhPA/UEWOGDj36Zs.jpg?size=827x827&quality=95&sign=61124a804b2600af6f9c9a46ef21f397&type=album',
        p: 'Чупапи Муняня',
        p1: "А у меня айфон в кредит"
    }, {
        id: 2,
        src: 'https://sun9-36.userapi.com/impg/ojxAQ7xUJzp4kkHJYAGuiAqTTmjLmOr1RNP4uQ/TSc8CcFPkPA.jpg?size=720x745&quality=95&sign=bd7406d1f17a7d5ae58de2bf3fe503d4&type=album',
        p: 'Daniel',
        p1: "а у меня мак"
    }]
}

const contentReducer = function (state = initialState, action) {
    if (action.type === typeAddPost) {
        if (state.newCommText !== '') {
            return {
                newCommText: '',
                comments: [{
                    id: 3,
                    src: 'https://sun9-36.userapi.com/impg/ojxAQ7xUJzp4kkHJYAGuiAqTTmjLmOr1RNP4uQ/TSc8CcFPkPA.jpg?size=720x745&quality=95&sign=bd7406d1f17a7d5ae58de2bf3fe503d4&type=album',
                    p: 'Daniel',
                    p1: state.newCommText
                },
                    ...state.comments]
            }
        }
    } else if (action.type === typeEditCommInput) {
        return {
            ...state,
            newCommText: action.text,
        }
    } else {
        return {
            ...state,
        }
    }
}

export const addCommentActionCreator = function () {
    return {
        type: typeAddPost
    }
}

export const editCommInputActionCreator = function (text) {
    return {
        type: typeEditCommInput, text: text
    }
}

export default contentReducer;