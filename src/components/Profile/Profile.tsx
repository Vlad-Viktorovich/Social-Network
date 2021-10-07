import React from 'react';
import classes from './Profile.module.css';
import {MyPost} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileProps = {

}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost likesCount={5} message={"gfdg"} id={5}/>
        </div>
    )
}