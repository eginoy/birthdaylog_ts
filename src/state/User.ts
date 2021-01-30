import {atom} from 'recoil'

export interface User{
    Uid: string | null
    Name: string | null
    Birthday?: string | null
    IsAuthed?: boolean | null
}

const initialUser: User = {
    Uid: null,
    Name: null
}

export const userState = atom({
    key: 'user',
    default: initialUser
})