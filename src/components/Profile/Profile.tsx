import React from 'react';
import classes from './Profile.module.css';
import {MyPost} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType, StoreType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    messageForNewPost:string
    changeNewTextCallback:(NewText:string)=>void
    dispatch:(action:ActionTypes)=>void
    store:StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost
                posts={props.profilePage.posts}
                addPost={props.addPost}
                messageForNewPost={props.messageForNewPost}
                changeNewTextCallback={props.changeNewTextCallback}
                dispatch={props.store.dispatch.bind(props.store)}
            />
        </div>
    )
}