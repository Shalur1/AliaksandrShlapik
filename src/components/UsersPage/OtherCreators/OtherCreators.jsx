import React, {useEffect} from "react";
import {FollowThunk, getCreators, unFollowThunk} from "../../../Store/CreatorsReducer";
import Preloader from "../../Preloader/Preloader";
import OtherCreatorsBlock from "./OtherCreatorsBlockComponent/OtherCreatorsBlock";
import {connect} from "react-redux";


function OtherCreators(props) {
    useEffect(() => {
        getCreators(props.pageSize, props.currentPage);
    }, [])

    function Follow(userID) {
        props.FollowThunk(userID)
    }

    function UnFollow(userID) {
        props.unFollowThunk(userID);
    }

    return (
        <>
            {props.isFetchinCreators ? <Preloader/> : <OtherCreatorsBlock props={props}
                                                                          Follow={Follow}
                                                                          UnFollow={UnFollow}/>}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        creators: state.Creators.creators,
        pageSize: state.Creators.pageSize,
        totalCreatorsCount: state.Creators.totalCreatorsCount,
        currentPage: state.Creators.currentPage,
        isFetchinCreators: state.Creators.isFetchinCreators,
        isFetchingFollowed: state.Creators.isFetchingFollowed
    }
}

let mapDispatchToProps = {
    getCreators,
    FollowThunk,
    unFollowThunk,
}


const CreatorsContainer = connect(mapStateToProps, mapDispatchToProps)(OtherCreators);

export default CreatorsContainer;
