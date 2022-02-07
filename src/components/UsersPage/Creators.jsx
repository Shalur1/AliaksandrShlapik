import React from "react";
import s from './Creators.module.css'
import OtherCreators from "./OtherCreators/OtherCreators";


function Creators(props) {
    debugger
    return (
        <div className={s.Creators}>
            <h3>The most popular creators:</h3>
            <div className={s.mostPopularCreators}>Creators</div>
            <h4>Other Creators:</h4>
            <OtherCreators store={props.store}/>
        </div>
    );
}

export default Creators;