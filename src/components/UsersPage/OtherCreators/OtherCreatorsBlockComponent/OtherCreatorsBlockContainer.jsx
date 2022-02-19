import React from "react";
import {connect} from "react-redux";
import {Follow, UnFollow, SetCreators, pageBack, pageNext, SetIsFetching} from "../../../../Store/CreatorsReducer";
import * as axios from "axios";
import OtherCreatorsBlock from "./OtherCreatorsBlock";
import Preloader from "../../../Preloader/Preloader";

class OtherCreatorsContainer extends React.Component {
    debugger

    componentDidMount() {
        this.props.SetIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {
                withCredentials: true
            }
            )
            .then(response => {
                debugger
                this.props.SetIsFetching(false);
                this.props.SetCreators(response.data.items);
            })
    }

    PageNext(pageNumber) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber + 1}`,
            {
                withCredentials: true
            }
            )
            .then(response => {
                this.props.pageNext(pageNumber)
                this.props.SetCreators(response.data.items)
            })
    }

    PageBack(pageNumber) {
        if (pageNumber !== 1) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber - 1}`,
                {
                    withCredentials: true
                }
                )
                .then(response => {
                    this.props.pageBack(pageNumber)
                    this.props.SetCreators(response.data.items)
                })
        } else return
    }
    Follow(userID){
        debugger
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {
            withCredentials: true,
            headers:{
                "API-KEY" : '9157202d-f2ae-4647-b6e3-f638fd8ed924'
            }
        })
            .then(response => {
                console.log(response.data.data)
                this.props.Follow(userID)
            })
    }
    UnFollow(userID){
        debugger
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {
            withCredentials: true,
            headers:{
                "API-KEY" : '9157202d-f2ae-4647-b6e3-f638fd8ed924'
            }
        })
            .then(response => {
                console.log(response.data.data)
                this.props.UnFollow(userID)
            })
    }

    render() {
        console.log(this.props)
        debugger
        return <>
            {
                this.props.isFetchin ? <Preloader/>
                    : <OtherCreatorsBlock props={this.props}
                                          Follow={this.Follow}
                                          UnFollow={this.UnFollow}
                                          PageNext={this.PageNext}
                                          PageBack={this.PageBack}/>
            }

        </>
    }
}

let mapStateToProps = function (state) {
    return {
        creators: state.Creators.creators,
        pageSize: state.Creators.pageSize,
        totalCreatorsCount: state.Creators.totalCreatorsCount,
        currentPage: state.Creators.currentPage,
        isFetchin: state.Creators.isFetchin
    }
}

let mapDispatchToProps = {
    Follow,
    UnFollow,
    SetCreators,
    pageBack,
    pageNext,
    SetIsFetching
}

const OtherCreatorsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(OtherCreatorsContainer);

export default OtherCreatorsBlockContainer;