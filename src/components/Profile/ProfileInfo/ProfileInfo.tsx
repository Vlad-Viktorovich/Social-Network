import React from 'react';
import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.content}>
                <img src="https://35photo.pro/photos_main/449/2245779.jpg" alt="foto"/>
            </div>
            <div className={classes.descriptonBlock}>
                ava+description
            </div>
        </div>
    )
}