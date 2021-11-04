import React from 'react';
import {renderTree} from '../renderTree';

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
    messageForNewPost:string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}

export let state: RootStateType = {
    profilePage: {
        messageForNewPost:"",
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
        ]
    },
    sideBar: {}
}

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0

    }

    state.profilePage.posts.push(newPost)

    renderTree(state)
}
    export const changeNewText =(newText:string)=>{
        state.profilePage.messageForNewPost=newText
        renderTree(state)
    }
