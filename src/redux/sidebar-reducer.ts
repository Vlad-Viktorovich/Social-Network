import {ActionTypes} from './store';

export type SideBarType = {}

let initialState: SideBarType = {}

export const sideBarReducer = (state: SideBarType = initialState, action: ActionTypes): SideBarType => {
    return state
}