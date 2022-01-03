import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileResponsePropsType, getUserProfile} from '../../redux/profile-reducer';
import {RootStoreType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type MathType={
    userId:string
}
type MapStatePropsType ={
    profile: ProfileResponsePropsType
}
type MapDispatchPropsType ={
    getUserProfile: (userId: string) => void
}
type PropsType = RouteComponentProps<MathType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}

let mapStateToProps = (state: RootStoreType):MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);