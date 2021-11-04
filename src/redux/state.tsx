import React from 'react';

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

export type ProfilePageType={
    posts:Array<PostsType>
}

export type DialogsPageType={
    dialogs:Array<DialogsType>
    message:Array<MessageType>
}

type SideBarType={}

export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sideBar:SideBarType
}

export let state:RootStateType = {
    profilePage: {
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
    sideBar:{}
}