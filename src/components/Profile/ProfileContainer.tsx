import React, {useEffect} from 'react';
import {Profile} from './Profile';
import {connect, useDispatch} from 'react-redux';
import {getUserProfile, ProfileResponsePropsType} from '../../redux/profile-reducer';
import {RootStoreType} from '../../redux/redux-store';
import {useParams} from 'react-router-dom';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileResponsePropsType
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type PropsType = ProfileContainerPropsType


// class ProfileContainer extends React.Component<PropsType> {
//
//     componentDidMount() {
//       let {userId} = useParams()
//         if (!userId) {
//             userId = "2"
//         }
//         this.props.getUserProfile(userId)
//     }
//
//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile}/>
//         )
//
//     }
// }

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
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);