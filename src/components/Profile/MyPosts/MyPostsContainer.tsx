import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/store';
import {MyPosts} from './MyPosts';
import {PostsType} from '../../../redux/profile-reducer';
import {Dispatch} from 'redux';
import {RootStoreType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

 type mapStateToPropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
}

export let mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
export let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        newTextChangeHandler: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);