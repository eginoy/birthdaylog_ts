export type GiftRegister = Gift & GiftDetail & {
    Id?: string
    InsertDate: Date
}

export type Gift = GiftDetail & {
    ToUid: string
    Birthday: string
    IsShow:boolean
}

export type GiftDetail = {
    Rank: number
    Name: string
    URL: string
    Comment: string
    InsertUid: string
}