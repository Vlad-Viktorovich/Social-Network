import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
}

const App = (props:AppPropsType) => {
    return (
            <div className={'app-wrapper'}>
                <Header title="ok"/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path = '/dialogs' render ={()=>
                        <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        message ={props.state.dialogsPage.message}
                        />}
                    />
                    <Route path = '/profile' render ={()=>
                        <Profile profile={props.state.profilePage}
                        />}
                    />
                </div>
            </div>
    );
}

export default App;
