import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CreatorsReducer from "./CreatorsReducer";
import thunk from "redux-thunk";


let redusers = combineReducers({
    Creators: CreatorsReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));

export default store;
