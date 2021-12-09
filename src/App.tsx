import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/Profile/Profile';
import {Route, Switch} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';


const App = () => {

    console.log('Companent render')
    return (
        <div className={'app-wrapper'}>
            <Header title="ok"/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Switch>
                    <Route exect path="/dialogs" render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path="/profile" render={() =>
                        <Profile/>}
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
