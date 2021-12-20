import React from 'react';

import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileResponsePropsType, setUserProfile} from '../../redux/profile-reducer';

import {RootStoreType} from '../../redux/redux-store';

export type ProfileContainerPropsType = {
    profile: ProfileResponsePropsType
    setUserProfile:(data:ProfileResponsePropsType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get<ProfileResponsePropsType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}
let mapStateToProps = (state:RootStoreType) => ({
    profile:state.profilePage.profile
})



export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);