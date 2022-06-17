import React from "react";
import s from './Product.module.css'
import {NavLink} from "react-router-dom";
import Price from "../../ProductPage/ProductInfo/Price/Price";


function Product(props) {
    console.log(props)
    return (
        <NavLink to={props.productInfo.id} className={s.Product}>
            <img src={props.productInfo.gallery[0]} alt=""/>
            <p>{props.productInfo.name}</p>
            <Price prices={props.productInfo.prices}/>
        </NavLink>
    );
}

export default Product
