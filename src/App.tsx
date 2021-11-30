import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {RootStoreType} from './redux/redux-store';
import {Store} from 'redux';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    store: Store<RootStoreType, any>
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()
    console.log('Companent render')
    return (
        <div className={'app-wrapper'}>
            <Header title="ok"/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Route exect path="/dialogs" render={() =>
                    <DialogsContainer
                      store={props.store}
                    />}
                />
                <Route path="/profile" render={() =>
                    <Profile
                        store={props.store}

                    />}
                />
            </div>
        </div>
    );
}

export default App;
