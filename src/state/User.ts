import {atom, useRecoilValue} from 'recoil'

export interface User{
    Uid: string | null
    Name: string | null
    Birthday?: Date | null
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