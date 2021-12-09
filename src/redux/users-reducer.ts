export type InitialStateType = {
    users: Array<UsersType>

}
export type UsersType = {
    id: number
    photos: {small:string | null, large:string | null}
    name: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersActionTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: InitialStateType = {
    users: [] as Array<UsersType>

}

export const usersReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
