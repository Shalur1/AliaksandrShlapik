import React from "react";
import s from './ProductInfo.module.css'
import Attributes from "./attributes/Attributes";
import Price from "./Price/Price";
import Name from "./Name/Name";


function ProductInfo(props) {
    console.log(props.productInfo)
    console.log(props.productsInCart)

    let AddProduct = function () {
        if (props.productsInCart.length === 0) {
            props.productInfo.kolichestvo = 1
            props.productInfo.number = props.productsInCart.length
            props.AddProductsToCart(props.productInfo)
        } else {
            const even = (element) => element.name === props.productInfo.name && element.brand === props.productInfo.brand
            if (props.productsInCart.some(even) === true) {
                return
            } else {
                props.AddProductsToCart(props.productInfo)
                props.productInfo.kolichestvo = 1
                props.productInfo.number = props.productsInCart.length + 1
            }
        }
    }
    return (
        <div>
            <Name brand={props.productInfo.brand} name={props.productInfo.name}/>
            <Attributes name={props.productInfo.brand + " " + props.productInfo.name} DeleteChosenAttributes={props.DeleteChosenAttributes} chosenAttributes={props.chosenAttributes}
                        SetChosenAttributes={props.SetChosenAttributes} attributes={props.productInfo.attributes}/>
            <p className={s.Name}>PRICE:</p>
            <Price prices={props.productInfo.prices}/>
            <button onClick={AddProduct} className={s.btn}>ADD TO CART</button>
            <p>{props.productInfo.description}</p>
        </div>
    );
}

export default ProductInfo

