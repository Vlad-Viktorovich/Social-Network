import React from 'react';
import classes from './Profile.module.css';
import {MyPost} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profile: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.profile.posts}/>
        </div>
    )
}