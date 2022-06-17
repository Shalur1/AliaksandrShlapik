import React, {useEffect} from "react";
import {connect} from "react-redux";
import s from './ProductPage.module.css'
import {useParams} from "react-router-dom";
import {
    AddProductsToCart,
    DeleteChosenAttributes,
    getProductInfo,
    SetChosenAttributes, SetChosenImage
} from "../../Store/CreatorsReducer";
import Images from "./Images/Images";
import ProductInfo from "./ProductInfo/ProductInfo";


function ProductPage(props) {
    useEffect(()=>{
        getProductInfo(props.params.routedProductID)
    }, [props.params.routedProductID])
    return (
        <div>
            {props.productInfo === null || props.isFetchingProductPage === true ? <div>GG</div> :
                <div className={s.Products}>
                     <div className={s.Img}>
                         <Images SetChosenImage={props.SetChosenImage} chosenImage={props.chosenImage} gallery={props.productInfo.gallery}/>
                     </div>
                    <div className={s.Info}>
                        <ProductInfo productsInCart={props.productsInCart} AddProductsToCart={props.AddProductsToCart} DeleteChosenAttributes={props.DeleteChosenAttributes} chosenAttributes={props.chosenAttributes} SetChosenAttributes={props.SetChosenAttributes} productInfo={props.productInfo}/>
                    </div>
                </div>}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        productInfo: state.Creators.productInfo,
        chosenAttributes: state.Creators.chosenAttributes,
        isFetchingProductPage: state.Creators.isFetchingProductPage,
        productsInCart: state.Creators.productsInCart,
        chosenImage: state.Creators.chosenImage
    }
}

let mapDispatchToProps = {
    getProductInfo,
    SetChosenAttributes,
    DeleteChosenAttributes,
    AddProductsToCart,
    SetChosenImage
}

let RouterComponent = (props) => {
    return <ProductPage {...props} params={useParams()}/>;
}

const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(RouterComponent);

export default ProductPageContainer;
