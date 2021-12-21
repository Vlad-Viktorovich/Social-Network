import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
    isAuth: boolean
    login: string | null
}

export const Header = (props:HeaderProps) => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Carhartt_logo.svg/192px-Carhartt_logo.svg.png"/>
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )

}