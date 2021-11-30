import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes} from '../../redux/store';
import {ProfilePageType} from '../../redux/profile-reducer';
import {Store} from 'redux';
import {RootStoreType} from '../../redux/redux-store';
import {MyPostContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store:Store<RootStoreType, any>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer
                store={props.store}
            />
        </div>
    )
}