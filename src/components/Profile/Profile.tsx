import React from 'react';
import classes from './Profile.module.css';
import {MyPost} from './MyPosts/MyPosts';

type ProfileProps = {}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <div className={classes.content}>
                <img src="https://35photo.pro/photos_main/449/2245779.jpg" alt="foto"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPost/>
        </div>
    )
}