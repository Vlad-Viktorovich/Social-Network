import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType, DialogsType, MessageType} from '../../redux/state';

type DialogsPropsType={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.message.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
               {messagesElement}
            </div>
        </div>
    )
}