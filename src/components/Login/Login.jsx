import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import {GetProfileInfo, GetStatus, SetIsFetching, SetProfileInfo, UpdateStatus} from "../../Store/ProfileReducer";
import {connect} from "react-redux";
import {loginThunk} from "../../Store/authReducer";


let Login = function (props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm loginThunk={props.loginThunk}
                            LoginFormErrorMessage={props.LoginFormErrorMessage}
            />
        </div>
    )
}

let mapStateToProps = function (state) {
    return {
        LoginFormErrorMessage: state.auth.LoginFormErrorMessage,
    }
}

let mapDispatchToProps = {
    loginThunk
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
