import React from "react";
import s from './OtherCreatorsBlock.module.css'
import {NavLink} from "react-router-dom";

let OtherCreatorsBlock = (props) => {
    return (
            <div>{(props.props.creators.map(item =>
                <div className={s.OtherCreators}>
                    <img
                        src={item.photos.small != null ? item.photos.small : 'https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A='}
                        alt=""/>
                    <NavLink className={s.NavLink} to={'/profile/' + item.id}>{item.name}</NavLink>
                    <p className={s.p2}>{item.p2}</p>
                    <p className={s.p3}>{item.p3}</p>
                    <div>
                        {(item.followed ? <button disabled={props.props.isFetchingFollowed.some(id => id === item.id)}
                                                  onClick={() => {
                                                      props.UnFollow(item.id)
                                                  }}>Unfollow</button>
                            : <button disabled={props.props.isFetchingFollowed.some(id => id === item.id)}
                                      onClick={() => {
                                          props.Follow(item.id)
                                      }}>Follow</button>)}
                    </div>
                </div>))}
            </div>
    )
}


export default OtherCreatorsBlock;