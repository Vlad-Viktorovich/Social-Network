import {profileReduser} from './profile-reducer';
import {dialogsReduser} from './dialogs-reducer';
import {sideBarReduser} from './sidebar-reducer';

export type MessageType = {
    message: string
    id: number
}
export type DialogsType = {
    name: string
    id: number
}
export type PostsType = {
    message: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}
export type SideBarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE_NEW_TEXT',
        newText: newText
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ]
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost(postText: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0

        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    _onChange() {
        console.log('state change')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReduser(this._state.sideBar, action)

        this._onChange()

    }
}

