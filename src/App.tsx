import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionTypes, RootStateType, StoreType} from './redux/store';

type AppPropsType = {
    store:StoreType
}

const App = (props: AppPropsType) => {
    const state=props.store.getState()
    return (
        <div className={'app-wrapper'}>
            <Header title="ok"/>
            <Nav/>
            <div className={'app-wrapper-content'}>
                <Route exect path="/dialogs" render={() =>
                    <Dialogs
                        dispatch={props.store.dispatch.bind(props.store)}
                        dialogs={state.dialogsPage.dialogs}
                        message={state.dialogsPage.message}
                        newMessageBody={state.dialogsPage.newMessageBody}
                    />}
                />
                <Route path="/profile" render={() =>
                    <Profile
                        store={props.store}
                        profilePage={state.profilePage}
                        addPost={props.store.addPost.bind(props.store)}
                        messageForNewPost={state.profilePage.messageForNewPost}
                        changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
            </div>
        </div>
    );
}

export default App;
