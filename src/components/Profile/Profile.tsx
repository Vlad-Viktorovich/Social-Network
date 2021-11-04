import React from 'react';
import classes from './Profile.module.css';
import {MyPost} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    messageForNewPost:string
    changeNewTextCallback:(NewText:string)=>void
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
            />
        </div>
    )
}