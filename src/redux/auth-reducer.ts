const SET_USER_DATA = 'SET_USER_DATA'

export type UserDataActionsType =
    ReturnType<typeof setAuthUserData>

export type AuthUserDataStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthUserDataStateType = initialState, action: UserDataActionsType): AuthUserDataStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                login: action.data.login,
                id: action.data.id,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => (
    {type: SET_USER_DATA, data: {id, email, login}} as const)