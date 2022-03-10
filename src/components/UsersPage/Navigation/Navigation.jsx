import {pageBackThunk, pageNextThunk} from "../../../Store/CreatorsReducer";
import React from "react";
import {connect} from "react-redux";
import s from '../Creators.module.css'


let Navigation = function (props) {

    console.log(props)

    function PageNext(pageNumber) {
        props.pageNextThunk(props.pageSize, pageNumber)
    }

    function PageBack(pageNumber) {
        if (pageNumber !== 1) {
            props.pageBackThunk(props.pageSize, pageNumber)
        } else return
    }

    return (
        <div className={s.Nav}>
            <button onClick={() => {
                PageBack(props.currentPage)
            }}>back
            </button>
            <p>{props.currentPage}</p>
            <button onClick={() => {
                PageNext(props.currentPage)
            }
            }>next
            </button>
        </div>
    )
}

let mapStateToProps = (state) => {
    debugger
    return {
        pageSize: state.Creators.pageSize,
        currentPage: state.Creators.currentPage,
    }
}

let mapDispatchToProps = {
    pageNextThunk,
    pageBackThunk,
}


const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;