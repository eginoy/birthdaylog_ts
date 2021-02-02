export type GiftRegister = GiftRanking & GiftRankingDetail & {
    Id?: string
    InsertDate: Date
}

export type GiftRanking = GiftRankingDetail & {
    ToUid: string
    Birthday: string
    IsShow:boolean
}

export type GiftRankingDetail = {
    Rank: number
    Name: string
    URL: string
    Comment: string
    InsertUid: string
}