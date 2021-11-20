import {ActionTypes, PostsType, ProfilePageType} from './store';



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

export const profileReduser = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
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