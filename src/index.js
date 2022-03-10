import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Store/redux-store";
import ReactDOM from "react-dom";
import App from './App'


let reRender = function () {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender()

store.subscribe( function () {
    reRender();
});

reportWebVitals();