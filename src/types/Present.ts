export type PresentRegister = Present & PresentDetail & {
    Id?: string
    InsertDate: Date
}

export type Present = PresentDetail & {
    ToUid: string
    Birthday: string
    IsShow:boolean
}

export type PresentDetail = {
    Rank: number
    Name: string
    URL: string
    Comment: string
    InsertUid: string
}