import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sideBarReducer} from './sidebar-reducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sideBarReducer
    }
)


export type RootStoreType = ReturnType<typeof reducers>
export let store: Store<RootStoreType, any> = createStore(reducers)