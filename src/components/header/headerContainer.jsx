import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {authThunk, logOutThunk, SetIsFetching, SetUserData} from "../../Store/authReducer";
import {getData, getIsAuth, getIsFetchin, getUserId} from "../../Store/header-selectors";

class headerContainerClassComponent extends React.Component {
    componentDidMount() {
        authThunk()
    }

    render() {
        return <>
            <Header props={this.props}/>
        </>
    }
}

let mapStateToProps = function (state) {
    return {
        data: getData(state),
        isFetchin: getIsFetchin(state),
        isAuth: getIsAuth(state),
        userId: getUserId(state)
    }
}

let mapDispatchToProps = {
    SetUserData,
    SetIsFetching,
    authThunk,
    logOutThunk
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(headerContainerClassComponent);


export default HeaderContainer;