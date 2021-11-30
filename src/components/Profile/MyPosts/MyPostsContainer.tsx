import React, {ChangeEvent} from 'react';
import {ActionTypes, addPostAC, changeNewTextAC} from '../../../redux/store';
import {MyPost} from './MyPosts';
import {PostsType} from '../../../redux/profile-reducer';
import {Store} from 'redux';
import {RootStoreType} from '../../../redux/redux-store';

type MyPostsContainerPropsType = {
    store:Store<RootStoreType, any>
}
export const MyPostContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost))
    }
    let onPostChange = (value: string) => {
        props.store.dispatch(changeNewTextAC(value))
    }

    return (
        <MyPost
            posts={state.profilePage.posts}
            messageForNewPost={state.profilePage.messageForNewPost}
            addPost={addPost}
            newTextChangeHandler={onPostChange}
        />
    )
}