import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileResponsePropsType} from '../../redux/profile-reducer';
import {RootStoreType} from '../../redux/redux-store';
import {useParams} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileResponsePropsType | null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type PropsType = ProfileContainerPropsType

const ProfileContainer = (props: PropsType) => {
    const {profile, getUserProfile} = props
    let {userId} = useParams()
    useEffect(() => {
        if (!userId) {
            userId = '2'
        }
        getUserProfile(userId)
    }, [])

    return (
        <Profile {...props} profile={profile}/>
    )


}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile}),
    WithAuthRedirect,)(ProfileContainer);