import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {RootStoreType} from '../../redux/redux-store';
import {getAuthUserData} from '../../redux/auth-reducer';
import {Header} from './Header';
import {compose} from 'redux';


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header  {...this.props}/>
    }
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose<React.ComponentType>(connect(mapStateToProps, {getAuthUserData}))(HeaderContainer)
