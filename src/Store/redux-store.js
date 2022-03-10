import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import contentReducer from "./ContentReducer";
import CreatorsReducer from "./CreatorsReducer";
import ProfileReducer from "./ProfileReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";


let redusers = combineReducers({
    Creators: CreatorsReducer,
    homePage: homePageReducer,
    contentPage: contentReducer,
    ProfilePage: ProfileReducer,
    auth: authReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));

export default store;
