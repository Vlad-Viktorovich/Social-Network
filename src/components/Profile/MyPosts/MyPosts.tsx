import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsProps = {}

export const MyPost = (props: MyPostsProps) => {

    return (
        <div className={classes.posts}>
            My posts
            <div className={classes.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message ='Hi,how are you?'/>
                <Post message = "It's my first post"/>

            </div>
        </div>
    )
}