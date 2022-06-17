import React from "react";
import RightMenu from "./RightMenu/RightMenu";
import s from './Header.module.css'
import logo from '../../png/a-logo.png'
import LeftMenuContainer from "./LeftMenu/LeftMenu";


function Header(props) {
    return (
            <div className={s.mainDIV}>
                <LeftMenuContainer store={props.store} />
                <div className={s.Logo}>
                    <img src={logo} alt=""/>
                </div>
                <RightMenu productsInCart={props.store.getState().Creators.productsInCart}/>
            </div>
    );
}

export default Header