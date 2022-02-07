import InputComments from "./inputComments";
import React from "react";
import {addCommentActionCreator, editCommInputActionCreator} from "../../../Store/ContentReducer";
import {connect} from "react-redux";


let mapStateToProps = function (state) {
    return{
        value: state.contentPage.newCommText
    }
}

let mapDispatchToProps = function (dispatch) {
    return{
        addComm: function (text) {
            dispatch(addCommentActionCreator(text));
        },
        addSymbol: function (text) {
            dispatch(editCommInputActionCreator(text));
        }
    }
}


const inputCommentsConteiner = connect(mapStateToProps, mapDispatchToProps)(InputComments)

export default inputCommentsConteiner;