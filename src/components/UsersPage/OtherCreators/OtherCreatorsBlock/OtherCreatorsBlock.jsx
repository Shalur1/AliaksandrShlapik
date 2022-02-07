import React from "react";
import s from './OtherCreatorsBlock.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Btn = React.createRef();

function OtherCreatorsBlock(props) {
    function GetCreators() {
        if (props.creators.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=8')
                .then(function (response) {
                    props.SetCreators(response.data.items)
                })
        }
    }
    return (
        <div>
            <button onClick={GetCreators}>click</button>
            <div>{(props.creators.map(item =>
                <div className={s.OtherCreators}>
                    <img
                        src={item.photos.small != null ? item.photos.small : 'https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A='}
                        alt=""/>
                    <NavLink className={s.NavLink} to={item.id}>{item.name}</NavLink>
                    <p className={s.p2}>{item.p2}</p>
                    <p className={s.p3}>{item.p3}</p>
                    <div>
                        {(item.followed ? <button ref={Btn} onClick={function () {
                            props.unFollow(item.id)
                        }}>Unfollow</button> : <button ref={Btn} onClick={function () {
                            props.follow(item.id)
                        }}>Follow</button>)}
                    </div>
                </div>))}
            </div>
        </div>
    )
}


export default OtherCreatorsBlock;