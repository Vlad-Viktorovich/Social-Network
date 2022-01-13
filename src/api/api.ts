import axios from 'axios';
import {UsersType} from '../redux/users-reducer';
import {ProfileResponsePropsType} from '../redux/profile-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7aecba52-71ee-44ea-87c4-4946729c53e5'
    }
})





type CommonDataType = {
    id: number
    login: string
    email: string
}
type CommonResponseType<T = {}> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

type GetUsersType = {
    error: string
    items: Array<UsersType>;
    totalCount: number
}

export const authApi = {
    getAuthData() {
        return instance.get<CommonResponseType<CommonDataType>>(`auth/me`)
    },
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
}

export const followApi = {
    follow(userId: string) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
    },

    unFollow(userId: string) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
    },
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileResponsePropsType>(`profile/${userId}`)
    }
}