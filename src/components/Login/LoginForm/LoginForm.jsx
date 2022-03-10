import React, {useMemo} from "react";
import s from './LoginForm.module.css'
import {Formik, Field, Form} from "formik";
import input from "../../FieldsComponents/FieldsComponents";

function ValidateEmail(value) {
    let error = '';
    if (!value) {
        error = 'введи email'
    }
    return error
}

function ValidatePassword(value) {
    let error = '';
    if (!value) {
        error = 'введи пароль'
    }
    return error
}

let LoginReduxForm = function (props) {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    checkbox: ''
                }}
                onSubmit={values => {
                    props.loginThunk(values.email, values.password)
                }}>
                {({
                      handleChange,
                      handleSubmit,
                      errors,
                      touched
                  }) => (
                    <Form className={s.form} onSubmit={handleSubmit}>
                        <Field name='email' type='email' id='email' onChange={handleChange} placeholder={'email'}
                               component={input} validate={ValidateEmail} errors={errors.email}
                               touched={touched.email}/>
                        {errors.email}
                        <Field name='password' id='password' type='password' onChange={handleChange}
                               placeholder={'password'}
                               component={input} validate={ValidatePassword} errors={errors.password}/>
                        {errors.password && touched.password}
                        <div>{errors.password}</div>
                        <Field name='checkbox' id='checkbox' type='checkbox' onChange={handleChange}/>
                        {props.LoginFormErrorMessage ? <div className={s.errorMessage}>{props.LoginFormErrorMessage}</div> : null}
                        <div className={s.button}>
                            <button type="submit">Login</button>
                        </div>
                    </Form>)}
            </Formik>
        </div>
    )
}


export default LoginReduxForm;