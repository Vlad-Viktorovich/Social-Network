import React from 'react';
import classes from './Profile.module.css'

type ProfileProps ={
title:string
}

export const Profile = (props:ProfileProps) =>{
    return(
        <div className={classes.content}>
            <div className={classes.item}>
                <img src = "https://35photo.pro/photos_main/449/2245779.jpg" alt = 'foto'/>
            </div>
            <div className={classes.item}>
                ava+description
                {props.title}
            </div>
            <div className={classes.item}>
                My posts
            </div>
            <div className={classes.item}>
                New post
            </div>
            <div className={classes.item}>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    )
}