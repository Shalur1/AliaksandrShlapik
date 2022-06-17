import React from "react";
import s from "../ProductInfo.module.css";


function Name(props) {
    return (
        <div id={`${props.brand + " " + props.name}`}>
            <p className={s.brand}>{props.brand}</p>
            <p className={s.name}>{props.name}</p>
        </div>
    );
}

export default Name

