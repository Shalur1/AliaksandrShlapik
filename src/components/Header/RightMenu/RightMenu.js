import React from "react";
import s from './RightMenu.module.css'
import {NavLink} from "react-router-dom";
import CART from '../../../png/EmptyCart.png'


function RightMenu(props) {
    return (
            <div className={s.RightMenu}>
                <NavLink to={"/cart"}>
                    <div>
                        {props.productsInCart.length === 0 ? <div>

                        </div> : <div className={s.Value}>
                            <p>{props.productsInCart.length}</p>
                        </div>}
                        <img className={s.Cart} src={CART} alt=""/>
                    </div>
                </NavLink>
            </div>
    );
}

export default RightMenu