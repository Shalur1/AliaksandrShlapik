import './App.css';
import Main from "./components/Content/Content_id1";
import Footer from "./components/footer/footer";
import React from "react";
import NavTop from "./components/NavTop/NavTop";
import HomePage from "./components/homePage/homePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Creators from "./components/UsersPage/Creators";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer store={props.store}/>
                <NavTop state={props.store.getState().auth}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="" element={<HomePage posts={props.store.getState().homePage}/>}/>
                        <Route path='/creators' element={<Creators store={props.store}/>}/>
                        <Route path="/content_id1" element={<Main store={props.store}/>}/>
                        <Route path="/profile/:routedUserId" element={<ProfileContainer store={props.store}/>}/>
                        <Route path="/login" element={<LoginContainer store={props.store}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
