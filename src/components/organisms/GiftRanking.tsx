import React from 'react'
import styled from 'styled-components'
import { User } from '../../state/User'
import { Gift } from '../../types/Gift'
import BaseContainer from '../atoms/BaseContainer'
import GiftRankingDetail from '../molecules/GiftRankingDetail'

interface Props {
    gifts: Gift[]
}

styled(BaseContainer)`

`

const GiftDetailsWrapper = styled.div`

`

const getUserName = (uid: Gift['ToUid']) => {
    if (uid) {
        return 'eginoy'
    }
    return 'ゲスト'
}

const getAge = (birthday: Gift['Birthday']) => {
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
                    <GiftRankingDetail
                        Rank={gift.Rank}
                        Name={gift.Name}
                        URL={gift.URL}
                        Comment={gift.Comment}
                        InsertUid={gift.InsertUid}
                    />
                })}
            </GiftDetailsWrapper>
        </BaseContainer>
    )
}

export default GiftRanking