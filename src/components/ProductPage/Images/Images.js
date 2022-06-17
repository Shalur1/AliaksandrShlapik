import React from "react";
import s from './Images.module.css'

function Images(props) {
    let GG = function (e) {
        props.SetChosenImage(e.target.id)
    }

    return (
        <div className={s.Images}>
                {props.gallery.length > 1 ? <div className={s.ChoseImages}>{props.gallery.map((img, index) =>{
                    return <img onClick={GG} id={index} className={s.im} src={img} alt=""/>
                })}</div> : <div></div>}
            <div className={s.ChosenImage}>
                <img src={props.gallery[props.chosenImage]} alt=""/>
            </div>
        </div>
    );
}

export default Images