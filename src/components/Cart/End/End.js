import React, {useEffect, useState} from "react";
import s from './End.module.css'
import {DeleteBag} from "../../../Store/CreatorsReducer";
import store from "../../../Store/redux-store";


function End(props) {
    useEffect(()=>{
        let Total = 0
        Array.from(document.getElementById("total").parentElement.parentElement.parentElement.children[0].children).map((element)=>{
            let a = element.children[0].children[1].children[0].children[1].children[0].innerText
            let b = element.children[0].children[0].children[3].innerText.slice(1)
            Total = Total + b*a
            document.getElementById("Price").innerText = "$"+Math.floor(Total*100)/100
            document.getElementById("Taxes").innerText = "$" + Math.floor(document.getElementById("Price").innerText.slice(1)*0.21*100)/100
            let gg = Math.floor(Total*100)/100 + Math.floor(document.getElementById("Price").innerText.slice(1)*0.21*100)/100
            let wvads = Math.floor(gg*100)/100
            document.getElementById("GG").innerText = '$' + wvads
        })
    })
    return (
            <div className={s.End}>
                <div>
                    <p>Tax 21%:</p>
                    <p id={"total"}>Price:</p>
                    <p>Total:</p>
                </div>
                <div className={s.Total}>
                    <p id={"Taxes"}></p>
                    <p id={"Price"}>${props.totalPrice}</p>
                    <p id={"GG"}></p>
                </div>
                <div>
                    <button onClick={()=>{store.dispatch(DeleteBag())}} className={s.btn}>ORDER</button>
                </div>
            </div>
    );
}

export default End