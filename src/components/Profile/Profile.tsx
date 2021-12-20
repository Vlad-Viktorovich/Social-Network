import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileResponsePropsType} from '../../redux/profile-reducer';

export type ProfilePropsType = {
    profile: ProfileResponsePropsType
}

export const Profile = (props:ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer  />
    </div>

}

