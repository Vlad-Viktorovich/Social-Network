import React, {ChangeEvent ,MouseEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {
    ActionTypes,
    DialogsPageType,
    DialogsType,
    MessageType, sendMessageAC,
    StoreType,
    updateNewMessageBodyAC
} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
    dispatch:(action:ActionTypes)=>void

}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.message.map(m => <Message message={m.message}/>)
    let newMessagesBody = props.newMessageBody

    let onSendMessageClickHandler = (event:MouseEvent<HTMLButtonElement>) => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
       let body = event.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
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