import {ActionTypes} from './store';

export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type PostsType = {
    message: string
    id: number
    likesCount: number
}

let initialState: ProfilePageType = {
        messageForNewPost: '',
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

export const profileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state
        case 'CHANGE_NEW_TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }

}