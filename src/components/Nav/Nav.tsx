import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom';

type NavProps = {}

export const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" >Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <>News</>
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