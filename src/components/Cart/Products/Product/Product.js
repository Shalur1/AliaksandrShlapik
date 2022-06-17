import React, {useEffect, useState} from "react";
import Name from "../../../ProductPage/ProductInfo/Name/Name";
import Attributes from "../../../ProductPage/ProductInfo/attributes/Attributes";
import s from "../Products.module.css";
import Price from "../../../ProductPage/ProductInfo/Price/Price";


function Product(props) {

    console.log(props)

    const [count, setCount] = useState(1);

    let plus = function () {
        props.AddToTotalPrice()
        setCount(count+1);
    }

    let minus = function () {
        if (count === 1){
            return
        }
        else {
            props.AddToTotalPrice()
            setCount(count-1);
        }
    }

    return (
        <div className={s.Product}>
            <div>
                <Name name={props.product.name} brand={props.product.brand}
                />
                <Attributes name={props.product.brand + " " + props.product.name} DeleteChosenAttributes={props.DeleteChosenAttributes}  chosenAttributes={props.chosenAttributes}
                            SetChosenAttributes={props.SetChosenAttributes} attributes={props.product.attributes}/>
                <p className={s.Name}>PRICE:</p>
                <Price prices={props.product.prices}/>
            </div>
            <div className={s.IMG}>
                <div className={s.Plus}>
                    <div onClick={plus} >+</div>
                    <div>
                        <p>{count}</p>
                    </div>
                    <div onClick={minus}>-</div>
                </div>
                <img src={props.product.gallery[0]} alt=""/>
            </div>
        </div>
            )
}


export default Product