import {ActionTypes, DialogsPageType, PostsType} from './store';

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

export const dialogsReduser = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {

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
