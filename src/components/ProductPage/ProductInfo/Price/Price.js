import React from "react";
import s from './Price.module.css'


function Price(props) {
    return (
        <div>
            <p id={"price"} className={s.Price}>{props.prices[0].currency.symbol + props.prices[0].amount}</p>
        </div>
    );
}

export default Price

