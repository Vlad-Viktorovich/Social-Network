import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void


}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.message.map(m => <Message message={m.message}/>)
    let newMessagesBody = state.newMessageBody

    let onSendMessageClickHandler = () => {
        props.sendMessage()
    }

    let onNewMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessagesBody}
                                   placeholder={'Enter yor message'}
                                   onChange={onNewMessageChangeHandler}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClickHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}