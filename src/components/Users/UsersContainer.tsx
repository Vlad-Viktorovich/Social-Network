import React from 'react'
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStoreType} from '../../redux/redux-store';
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';
import Users from './Users';

type MapStatePropsType={
    users:UsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage: number
}

type MapDispatchToProps={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void

}

export type UsersPropsType = MapStatePropsType & MapDispatchToProps

let mapStateToProps = (state: RootStoreType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);