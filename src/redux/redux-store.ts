
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sideBarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore, Store} from 'redux';

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)


export type RootStoreType = ReturnType<typeof rootReducer>
export let store: Store<RootStoreType, any> = createStore(rootReducer, applyMiddleware(thunk))