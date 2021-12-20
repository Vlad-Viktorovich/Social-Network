import React from 'react';
import classes from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';

export const ProfileInfo = (props:any) => {
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
                ava+description
            </div>
        </div>
    )
}