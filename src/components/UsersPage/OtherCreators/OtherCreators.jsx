import React from "react";
import s from './OtherCreators.module.css'
import OtherCreatorsBlockConteiner from "./OtherCreatorsBlock/OtherCreatorsBlockConteiner";


function OtherCreators(props) {
    debugger
    return (
        <div className={s.OtherCreators}>
            <OtherCreatorsBlockConteiner store={props.store}/>
        </div>
    );
}

export default OtherCreators;