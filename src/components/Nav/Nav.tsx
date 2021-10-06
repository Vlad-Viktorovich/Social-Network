import React from 'react';
import classes from './Nav.module.css'

type    NavProps = {

}

export const Nav = () =>{
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href = "/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href = "/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}