import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsType = {
    message:string
    id:number
    likesCount:number
}

export const MyPost = (props: MyPostsType) => {

    let posts = [
        {id: 1, message: 'Hi,how are you?',likesCount:12},
        {id: 2, message: 'It\'s my first post',likesCount:11}
    ]

    let postsElements = posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.item}>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}