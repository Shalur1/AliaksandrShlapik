import React from "react";
import s from "./NavTop.module.css"
import {NavLink} from "react-router-dom";

function NavTop() {
    return (
        <div className={s.NavTop}>
            <NavLink to=''>Home</NavLink>
            <NavLink to="/contentReducer">News</NavLink>
            <a href="#">Sport</a>
            <a href="#">Worklife</a>
            <a href="#">Travel</a>
            <a href="#">Future</a>
            <a href="#">Culture</a>
            <a href="#">Reel</a>
            <NavLink to='/creators'>Creators</NavLink>
        </div>
    );
}

export default NavTop;