import React from "react";

let Contacts = function (props) {
    return (
        <div>
            <h5>Контактрыне данные:</h5>
            {props.arr.map(e => {
                if (e !== null) {
                    return (
                        <div>
                            <a href={e.name}>{e.type}</a>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Contacts;