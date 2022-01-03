import {ActionTypes} from './store';
import {profileApi} from '../api/api';
import {Dispatch} from 'redux';

export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
    profile: any
}
export type PostsType = {
    message: string
    id: number
    likesCount: number
}

export type ProfileResponsePropsType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?:string
    contacts?:object
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
    photos?: photosType

}
type photosType ={
    small:string
    large:string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState: ProfilePageType = {
    messageForNewPost: '',
    profile: null,
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ]
}

const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE_NEW_TEXT',
        newText: newText
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const profileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.messageForNewPost = ''
            return stateCopy
        }
        case 'CHANGE_NEW_TEXT': {
            let stateCopy = {...state}
            stateCopy.messageForNewPost = action.newText
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}
export const setUserProfile = (profile:ProfileResponsePropsType) => ({type:SET_USER_PROFILE, profile}) as const