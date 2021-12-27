import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Route, Switch} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {

    console.log('Companent render');
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Switch>
                    <Route exect path="/dialogs" render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}
                    />
                    <Route path="/users" render={() =>
                        <UsersContainer/>}
                    />
                </Switch>
            </div>
        </div>
    );
}

export default App;
