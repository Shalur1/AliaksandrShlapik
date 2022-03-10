import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {logOutThunk} from "../../Store/authReducer";

function Header(props) {
    function logOut() {
        props.props.logOutThunk()
    }
    return (
        <header className={s.Header}>
            <h1>THE USHOD TIMES</h1>
            <NavLink to=""><img src="https://flagof.ru/wp-content/uploads/2018/10/flag_en_big.jpg" alt=""/></NavLink>
            <NavLink to='/by'> <img className={s.b4b}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png"
                                    alt=""/> </NavLink>
            <NavLink to='/ru'> <img src="https://klike.net/uploads/posts/2020-09/1599833816_2.jpg" alt=""/></NavLink>
            {props.props.isAuth === false ? <NavLink to={'/login'} className={s.auth}>Login</NavLink>
                : <div className={s.gg}>
                    <NavLink to={`/profile/${props.props.userId}`} className={s.auth}>{props.props.data.login}</NavLink>
                    <button onClick={logOut}>Logout</button>
                </div>}
        </header>
    );
}

export default Header;