import {ActionTypes} from './store';

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}
export type MessageType = {
    message: string
    id: number
}
export type DialogsType = {
    name: string
    id: number
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Bogdan'},
        {id: 3, name: 'Sergay'},
        {id: 4, name: 'Ilia'},
        {id: 5, name: 'Anton'},
        {id: 6, name: 'Lera '}
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: ''
}

const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}
const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}


export const dialogsReducer = (state: DialogsPageType=initialState, action: ActionTypes): DialogsPageType => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.message.push({id: 6, message: body})
            return state
        default:
            return state
    }
}
