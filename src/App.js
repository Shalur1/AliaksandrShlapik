import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import ProductsContainer from "./components/Products/Products";
import ProductPageContainer from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <div>
                    <Header store={props.store}/>
                    <Routes>
                        <Route path={""} element={<ProductsContainer store={props.store}/>}/>
                        <Route path={"/:routedProductID"} element={<ProductPageContainer store={props.store}/>}/>
                        <Route path={"/cart"} element={<Cart store={props.store} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
