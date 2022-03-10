import React from "react";
import s from './Creators.module.css'
import CreatorsContainer from "./OtherCreators/OtherCreators";
import NavigationContainer from "./Navigation/Navigation";


function Creators(props) {
    return (
        <div className={s.Creators}>
            <h4>Creators:</h4>
            <div className={s.CreatorsContainer}>
                <CreatorsContainer store={props.store}/>
            </div>
            <div className={s.Navigaton}>
                <NavigationContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Creators;