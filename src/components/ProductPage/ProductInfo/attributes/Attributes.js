import React, {useEffect} from "react";
import s from './Attributes.module.css'


function Attributes(props) {
    useEffect(() => {
        props.chosenAttributes.map((attribute) => {
            if (attribute.name.name === props.name) {
                Array.from(document.getElementById(`${attribute.name.name}`).parentElement.children[1].children[0].children).map((gg) => {
                    if (attribute.info.attributeName === gg.children[0].innerHTML) {
                        Array.from(gg.children[1].children).map((elem) => {
                            if (elem.id === attribute.info.attributeValue) {
                                if (elem.parentElement.id === "color") {
                                    elem.style.border = "3px solid green"
                                } else {
                                    elem.style.background = "black"
                                    elem.style.color = "white"
                                }
                            }
                        })
                    }
                })
            }
        })
    })


    let GG = function (e) {
        let GETELEMENT = function () {
            if (e.target.id !== "paragraph"){
                return e.target
            }
            else {
                return e.target.parentElement
            }
        }
        let wvsdzv = GETELEMENT();
        let name = wvsdzv.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children
        let info = {
            name: {
                name: name[0].innerHTML + " " + name[1].innerHTML,
            },
            info: {
                attributeName: wvsdzv.parentElement.parentElement.children[0].innerHTML,
                attributeValue: wvsdzv.id,
            }
        }
        if (props.chosenAttributes.length === 0) {
            props.SetChosenAttributes(info)
        } else {
            const even = (element) => element.name.name === info.name.name && element.info.attributeName === info.info.attributeName && element.info.attributeValue === info.info.attributeValue
            if (props.chosenAttributes.some(even) === true) {
                props.DeleteChosenAttributes(props.chosenAttributes.findIndex(el => el.info.attributeValue === info.info.attributeValue && el.name.name === info.name.name && el.info.attributeName === info.info.attributeName))
                if (wvsdzv.parentElement.id === "color") {
                    wvsdzv.style.border = ""
                } else {
                    wvsdzv.style.background = "white";
                    wvsdzv.style.color = "black"
                }
            } else {
                const even = (element) => element.name.name === info.name.name
                if (props.chosenAttributes.some(even) === true) {
                    const even = (element) => element.info.attributeName === info.info.attributeName
                    if (props.chosenAttributes.some(even) === true) {
                        return
                    } else props.SetChosenAttributes(info)
                } else props.SetChosenAttributes(info)
            }
        }
    }

    return (
        <div>
            <div className={s.Attributes}>
                {props.attributes.map((attribute) => {
                    if (attribute.type === "text") {
                        return <div>
                            <p className={s.Name}>{attribute.name.toUpperCase() + ":"}</p>
                            <div id={"text"} className={s.AttributeText}>
                                {attribute.items.map((item) => {
                                    return <div id={item.value} onClick={GG} className={s.itemText}><p
                                        id={"paragraph"}>{item.value}</p></div>
                                })}
                            </div>
                        </div>
                    } else {
                        return <div>
                            <p className={s.Name}>{attribute.name.toUpperCase() + ":"}</p>
                            <div id={"color"} className={s.AttributeText}>
                                {attribute.items.map((item) => {
                                    return <div id={item.value} onClick={GG} style={{background: item.value}}
                                                className={s.itemColor}></div>
                                })}
                            </div>
                        </div>
                    }
                })}
            </div>
        </div>
    );
}

export default Attributes

