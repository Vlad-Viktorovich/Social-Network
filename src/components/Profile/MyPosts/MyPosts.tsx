import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionTypes, addPostAC, changeNewTextAC} from '../../../redux/store';
import {PostsType} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: PostsType[]
    messageForNewPost:string
    dispatch:(action:ActionTypes)=>void
}
export const MyPost = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost))
     }
const newTextChangeHandler=(event: ChangeEvent<HTMLTextAreaElement>)=>{
    props.dispatch(changeNewTextAC(event.currentTarget.value))
}

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.item}>
                <div><textarea
                    value={props.messageForNewPost}
                    onChange={newTextChangeHandler}
                />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}