import React from 'react';
import classes from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {ProfileResponsePropsType} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = {
    profile: ProfileResponsePropsType | null
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.content}>
                <img src="https://35photo.pro/photos_main/449/2245779.jpg" alt="foto"/>
            </div>
            <div className={classes.descriptonBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.profile.aboutMe}/>
            </div>
        </div>
    )
}