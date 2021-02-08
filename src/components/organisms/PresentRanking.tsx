import React from 'react'
import styled from 'styled-components'
import { Present } from '../../types/Present'
import BaseContainer from '../atoms/BaseContainer'
import GiftRankingDetail from '../molecules/PresentRankingDetail'

interface Props {
    gifts: Present[]
}

styled(BaseContainer)`

`

const GiftDetailsWrapper = styled.div`

`

const getUserName = (uid: Present['ToUid']) => {
    if (uid) {
        return 'eginoy'
    }
    return 'ゲスト'
}

const getAge = (birthday: Present['Birthday']) => {
    if (birthday) {
        return 20
    }
    return '年齢の取得に失敗'
}

const GiftRanking = ({ gifts }: Props) => {
    const userName = getUserName(gifts[0].ToUid)
    const userAge = getAge(gifts[0].Birthday)

    return (
        <BaseContainer>
            <div className='birthday-user-info'>
                <span>{userName}のプレゼントランキング</span>
                <span>{userAge}歳の誕生日</span>
            </div>
            <GiftDetailsWrapper>
                {gifts.map(gift => {
                    return (
                        <GiftRankingDetail
                            Rank={gift.Rank}
                            Name={gift.Name}
                            URL={gift.URL}
                            Comment={gift.Comment}
                            InsertUid={gift.InsertUid}
                        />
                    )
                })}
            </GiftDetailsWrapper>
        </BaseContainer>
    )
}

export default GiftRanking