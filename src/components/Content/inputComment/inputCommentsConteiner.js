import React, {useRef} from "react";
import {addComm} from "../../../Store/ContentReducer";
import {connect} from "react-redux";
import {useFormik} from "formik";
import s from "./inputComments.module.css";


function InputComments(props) {

    const formik = useFormik({
        initialValues: {
            commArea: ''
        },

        onSubmit: values => {
            props.addComm(values.commArea)
        }
    })


    return (
        <form className={s.Comments} onSubmit={formik.handleSubmit}>
            <textarea onChange={formik.handleChange}
                      name="" id="commArea" cols="50" rows="1"/>
            <button type="submit">Оставить комментарий</button>
            <h3>Комментарии:</h3>
        </form>
    );
}

let mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    addComm
}

const inputCommentsConteiner = connect(mapStateToProps, mapDispatchToProps)(InputComments)

export default inputCommentsConteiner;