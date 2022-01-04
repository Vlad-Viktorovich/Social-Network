import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../redux/redux-store";
import {Navigate} from 'react-router-dom';

type mapStateToPropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}