import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProducts} from "../../Store/CreatorsReducer";
import Product from "./Product/Product";
import s from './Products.module.css'


function Products(props) {
    useEffect(()=>{
        getProducts(props.chosenCategory.toLowerCase())
        console.log(props.products)
    },[props.chosenCategory])
    return (
        <div>
            <p className={"CategoryName"}>{props.store.getState().Creators.chosenCategory}</p>
            <div className={s.Products}>
                {props.products.map((product)=>{
                    return <Product productInfo={product}/>
                })}
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        products: state.Creators.products,
        chosenCategory: state.Creators.chosenCategory
    }
}

let mapDispatchToProps = {
    getProducts
}


const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;
