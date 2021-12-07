import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sideBarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer,
        usersPage: usersReducer
    }
)


export type RootStoreType = ReturnType<typeof rootReducer>
export let store: Store<RootStoreType, any> = createStore(rootReducer)