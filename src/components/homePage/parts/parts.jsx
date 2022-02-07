import React from "react";
import s from './parts.module.css'
import FirstPart from "./FirstPart/Firstpart";

function Parts(props) {
    return (
        <div className={s.parts}>
            <FirstPart posts={props.posts}/>
        </div>
    );
}

export default Parts;