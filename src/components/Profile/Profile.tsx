import React from 'react';
import {MyPost} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes} from '../../redux/store';
import {ProfilePageType} from '../../redux/profile-reducer';
import {Store} from 'redux';
import {RootStoreType} from '../../redux/redux-store';

type ProfilePropsType = {
    profilePage: ProfilePageType
    messageForNewPost:string

    dispatch:(action:ActionTypes)=>void
    store:Store<RootStoreType, any>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost
                posts={props.profilePage.posts}
                messageForNewPost={props.messageForNewPost}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}