import React from "react";
import {connect} from "react-redux";
import {Follow, UnFollow, SetCreators} from "../../../../Store/CreatorsReducer";
import OtherCreatorsBlock from "./OtherCreatorsBlock";


let mapStateToProps = function (state) {
    debugger
    return {
        creators: state.Creators.creators
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        follow: function (userID) {
            dispatch(Follow(userID))
        },
        unFollow: function (userID) {
            dispatch(UnFollow(userID))
        },
        SetCreators: function (creators) {
            dispatch(SetCreators(creators))
        }
    }
}

const OtherCreatorsBlockConteiner = connect(mapStateToProps, mapDispatchToProps)(OtherCreatorsBlock);

export default OtherCreatorsBlockConteiner;