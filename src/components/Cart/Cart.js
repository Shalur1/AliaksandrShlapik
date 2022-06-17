import React from "react";
import s from './Cart.module.css'
import ProductsContainer from "./Products/Products";
import End from "./End/End";


function Cart(props) {
    return (
        <div id={"CART"} className={s.Cart}>
            <p className={s.CartP}>CART</p>
            {props.store.getState().Creators.productsInCart.length === 0 ?
                <p>The cart is empty</p> :
                <div>
                    <ProductsContainer store={props.store}/>
                    <End totalPrice={props.store.getState().Creators.totalPrice}/>
                </div>}

        </div>
    );
}

export default Cart