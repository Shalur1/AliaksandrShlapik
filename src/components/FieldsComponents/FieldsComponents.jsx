import React from "react";
import s from './FieldsComponents.module.css'


function input(props) {
        return (
        <div className={props.errors ? s.InputError : s.InputOk}>
            <input {...props}/>
        </div>
    );
}

export default input;