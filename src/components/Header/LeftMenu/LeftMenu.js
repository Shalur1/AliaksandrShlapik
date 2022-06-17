import React, {useEffect, useState} from "react";
import s from './LeftMenu.module.css'
import {getCategories, SetChosenCategory} from "../../../Store/CreatorsReducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


function LeftMenu(props) {
    useEffect(() => {
        getCategories()
    }, [true])

    useEffect(()=>{
        Array.from(document.getElementById(props.chosenCategory.toLowerCase()).parentElement.children).map((e) => {
            if (e.innerText === props.chosenCategory) {
                e.style.borderBottom = "2px solid #5ECE7B"
                e.style.color = "#5ECE7B"
            } else {
                e.style.borderBottom = ""
                e.style.color = ""
            }
        })
    }, [props.chosenCategory])

    let Set = function (e) {
        props.SetChosenCategory(e.target.innerText)
    }

    return (
        <div className={s.LeftMenu}>
            {props.categories.map((e) => {
                return <NavLink to={""} id={e.name} onClick={Set}>{e.name}</NavLink>
            })}
        </div>
    );
}


let mapStateToProps = (state) => {
    return {
        categories: state.Creators.categories,
        chosenCategory: state.Creators.chosenCategory
    }
}

let mapDispatchToProps = {
    SetChosenCategory,
    getCategories
}


const LeftMenuContainer = connect(mapStateToProps, mapDispatchToProps)(LeftMenu);

export default LeftMenuContainer;
