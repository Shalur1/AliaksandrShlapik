import {combineReducers, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import contentReducer from "./ContentReducer";
import CreatorsReducer from "./CreatorsReducer";

let redusers = combineReducers({
    Creators: CreatorsReducer,
    homePage: homePageReducer,
    contentPage: contentReducer
});

let store = createStore(redusers);


export default store;
