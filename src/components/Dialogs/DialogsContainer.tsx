import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/store';
import {Dialogs} from './Dialogs';
import {compose, Dispatch} from 'redux';
import {RootStoreType} from '../../redux/redux-store';
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';


type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

export let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}
export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

