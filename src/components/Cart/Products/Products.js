import React, {useEffect} from "react";
import {
    AddToTotalPrice,
    DeleteChosenAttributes,
    SetChosenAttributes
} from "../../../Store/CreatorsReducer";
import {connect} from "react-redux";
import Product from "./Product/Product";


function Products(props) {
    return (
        <div>
            {props.productsInCart.map((product) => {
                return (
                    <div>
                        <Product
                            totalPrice={props.totalPrice}
                            SetZero={props.SetZero}
                            MinusTotalPrice={props.MinusTotalPrice}
                            AddToTotalPrice={props.AddToTotalPrice}
                            DeleteChosenAttributes={props.DeleteChosenAttributes}
                                 chosenAttributes={props.chosenAttributes}
                                 SetChosenAttributes={props.SetChosenAttributes}
                                 attributes={product.attributes} product={product}/>
                    </div>
                )
            })}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        productsInCart: state.Creators.productsInCart,
        chosenAttributes: state.Creators.chosenAttributes,
        totalPrice: state.Creators.totalPrice
    }
}

let mapDispatchToProps = {
    SetChosenAttributes,
    DeleteChosenAttributes,
    AddToTotalPrice,
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;