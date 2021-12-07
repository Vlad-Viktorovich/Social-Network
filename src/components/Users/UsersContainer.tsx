import React from 'react'
import {connect} from 'react-redux';
import {Users} from './Users';
import {Dispatch} from 'redux';
import {RootStoreType} from '../../redux/redux-store';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';

type MapStatePropsType={
    users:UsersType[]
}

type MapDispatchToProps={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void

}

export type UsersPropsType = MapStatePropsType | MapDispatchToProps

let mapStateToProps = (state: RootStoreType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);