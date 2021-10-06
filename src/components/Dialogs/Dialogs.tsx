import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsProps = {}
type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message:string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props:MessageType) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name="Viktor" id="1"/>
                <DialogItem name="Bogdan" id="2"/>
                <DialogItem name="Sergay" id="3"/>
                <DialogItem name="Ilia" id="4"/>
                <DialogItem name="Anton" id="5"/>
                <DialogItem name="Lera" id="6"/>

            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How is your it-kamasutra?'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}