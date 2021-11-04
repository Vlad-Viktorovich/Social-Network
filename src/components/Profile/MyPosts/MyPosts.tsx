import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType[]
}
export const MyPost = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/> )

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