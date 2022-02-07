import './App.css';
import Header from "./components/header/header";
import Main from "./components/Content/Content_id1";
import Footer from "./components/footer/footer";
import React from "react";
import NavTop from "./components/NavTop/NavTop";
import HomePage from "./components/homePage/homePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Creators from "./components/UsersPage/Creators";


function App(props) {
    debugger
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavTop/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="" element= {<HomePage posts={props.store.getState().homePage.posts}/>}/>
                        <Route path='/creators' element={<Creators store={props.store}/>}/>
                        <Route path="/content_id1" element={<Main store={props.store}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
