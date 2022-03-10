import React from "react";
import s from './parts.module.css'
import FirstPart from "./FirstPart/Firstpart";

const Parts = function(props) {
    return (
        <div className={s.parts}>
            <FirstPart props={props.props}/>
        </div>
    );
}

export default Parts;