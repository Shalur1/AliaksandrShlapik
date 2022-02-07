import React from "react";
import s from './inputComments.module.css'

let newCommentValue = React.createRef();

function InputComments(props) {
    function addComm() {
        props.addComm()
    }

    function onChangeText() {
        let text = newCommentValue.current.value
        props.addSymbol(text);
    }

    return (
        <div className={s.Comments}>
            <textarea ref={newCommentValue} value={props.value} onChange={onChangeText}
                      name="" id="" cols="50" rows="1"/>
            <button onClick={addComm}>Оставить комментарий</button>
            <h3>Комментарии:</h3>
        </div>
    );
}

export default InputComments;
