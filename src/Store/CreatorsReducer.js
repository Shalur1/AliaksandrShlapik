import {usersAPI as userAPI} from "../API/API";
import store from "./redux-store";

let initialState = {
    categories:[],
    chosenCategory: "ALL",
    products: [],
    productInfo: null,
    chosenAttributes:[],
    isFetchingProductPage: false,
    productsInCart: [],
    chosenImage: 0,
    totalPrice: true
};


let typeSetCategiries = "TypeSetCategories"
let typeSetChosenCategory = "TypeSetChosenCategory"
let typeSetProducts = "typeSetProducts"
let typeSetProductInfo = "typeSetProductInfo"
let typeAddChosenAttribute = "typeSetChosenAttribute"
let typeDeleteChosenAttribute = "typeDeleteChosenAttribute"
let typeSetIsFetchingProductPage = "typeSetIsFetchingProductPage"
let typeAddProductsToCart = "typeAddProductsToCart"
let typeSetChosenImage = "typeSetChosenImage"
let typeAddToTotalPrice = "typeAddToTotalPrice"
let typeDeleteBag = "typeDeleteBag"



const CreatorReducer = function (state = initialState, action) {
    if (action.type === typeSetCategiries){
        return{
            ...state,
            categories: action.categories.categories
        }
    }
    if (action.type === typeSetChosenCategory){
        return {
            ...state,
            chosenCategory: action.category
        }
    }
    if (action.type === typeSetProducts){
        return {
            ...state,
            products: action.products
        }
    }
    if (action.type === typeSetProductInfo){
        return {
            ...state,
            productInfo: action.productInfo
        }
    }
    if (action.type === typeAddChosenAttribute){
        return {
            ...state,
            chosenAttributes: [...state.chosenAttributes, action.info]
        }
    }
    if (action.type === typeDeleteChosenAttribute){
        state.chosenAttributes.splice(action.number)
        return {
            ...state
        }
    }
    if (action.type === typeSetIsFetchingProductPage){
        return {
            ...state,
            isFetchingProductPage: action.value
        }
    }
    if (action.type === typeAddProductsToCart){
        return {
            ...state,
            productsInCart: [...state.productsInCart, action.product]
        }
    }
    if (action.type === typeSetChosenImage){
        return {
            ...state,
            chosenImage: action.value
        }
    }
    if (action.type === typeAddToTotalPrice){
        return {
            ...state,
            totalPrice: !state.totalPrice
        }
    }
    if (action.type === typeDeleteBag){
        return {
            ...state,
            productsInCart: []
        }
    }
    return state;
}

export const SetCategories = function (categories) {
    return{
        type: typeSetCategiries, categories: categories
    }
}

export const AddToTotalPrice = function () {
    return{
        type: typeAddToTotalPrice
    }
}

export const DeleteBag = function () {
    return{
        type: typeDeleteBag
    }
}


export const SetChosenCategory = function (category){
    return{
        type: typeSetChosenCategory, category: category
    }
}

export const SetProducts = function (products) {
    return{
        type: typeSetProducts, products: products
    }
}

export const SetProductInfo = function (productInfo) {
    return{
        type: typeSetProductInfo, productInfo: productInfo
    }
}

export const SetChosenAttributes = function (info) {
    return{
        type: typeAddChosenAttribute, info: info
    }
}

export const DeleteChosenAttributes = function (number) {
    return{
        type: typeDeleteChosenAttribute, number:number
    }
}

export const SetIsFetchingProductPage = function (value) {
    return{
        type: typeSetIsFetchingProductPage, value: value
    }
}

export const AddProductsToCart = function (product) {
    return{
        type: typeAddProductsToCart, product: product
    }
}

export const SetChosenImage = function (value) {
    return{
        type: typeSetChosenImage, value: value
    }
}


export const getCategories = async () => {
    let response = await userAPI.GetCategories();
    store.dispatch(SetCategories(response.data.data))
}

export const getProducts = async (category) => {
    let response = await userAPI.GetProducts(category);
    store.dispatch(SetProducts(response.data.data.category.products))
}

export const getProductInfo = async (id) => {
    store.dispatch(SetIsFetchingProductPage(true))
    let response = await userAPI.GetProductInfo(id)
    store.dispatch(SetProductInfo(response.data.data.product))
    store.dispatch(SetIsFetchingProductPage(false))
}



export default CreatorReducer;