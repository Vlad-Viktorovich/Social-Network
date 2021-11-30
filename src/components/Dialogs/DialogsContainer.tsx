import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {Store} from 'redux';
import {RootStoreType} from '../../redux/redux-store';

type DialogsContainerPropsType = {
    store: Store<RootStoreType, any>
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClickHandler = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChangeHandler = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChangeHandler}
                 sendMessage={onSendMessageClickHandler}
                 dialogsPage={state}
        />
    )
}