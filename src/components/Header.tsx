import React from 'react';
import classes from './Header.module.css'

type HeaderProps = {
title: string
}

export const Header = (props:HeaderProps) => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Carhartt_logo.svg/192px-Carhartt_logo.svg.png"/>
        </header>
    )

}