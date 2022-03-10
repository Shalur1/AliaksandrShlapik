import React, {useEffect, useState} from "react";


let ProfileStatus = function (props) {

    let [editMode, SetEditMode] = useState(false)
    let [status, SetStatus] = useState(props.status)
    
    let activateEditMode = function () {
        SetEditMode(true)
    }

    let inStatusChange = function (e) {
        SetStatus(e.currentTarget.value)
    }

    let diactivateEditMode = function () {
        SetEditMode(false)
        props.updateStatus(status);
    }

    useEffect( () => {
        SetStatus(props.status)
        }, [props.status]
    )

    return(
        <div>
            {!editMode &&
                <div>
                        <span
                            onDoubleClick={activateEditMode}>{props.status ? props.status : 'нет статуса'}</span>
                </div>}

            {editMode &&
                <div>
                    <input onChange={inStatusChange} autoFocus={true} onBlur={diactivateEditMode}
                           value={status}/>
                </div>}
        </div>
    )

}

export default ProfileStatus
