import React from 'react'
import styled from 'styled-components'
import { Present } from '../../types/Present'
import BaseContainer from '../atoms/BaseContainer'
import PresentRankingDetail from '../molecules/PresentRankingDetail'

interface Props {
    gifts: Present[]
}

const StyledWrapper = styled.div`
    .birthday-user-info{
        margin-bottom: 0.3em;
    }
    .birthday-user-info > span{
        color:${props => props.theme.palette.text.primary};
    }
`

const PresentDetailsWrapper = styled.div`
    & > div{
        margin-bottom:1em;
    }
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

const PresentRankingEdit = ({ gifts }: Props) => {
    const userName = getUserName(gifts[0].ToUid)
    const userAge = getAge(gifts[0].Birthday)

    return (
        <StyledWrapper>
            <BaseContainer>
                <div className='birthday-user-info'>
                    <span>{userName}のプレゼントランキング</span>
                    <span>{userAge}歳の誕生日</span>
                </div>
                <PresentDetailsWrapper>
                    {gifts.map(gift => {
                        return (
                            <PresentRankingDetail
                                Rank={gift.Rank}
                                Name={gift.Name}
                                URL={gift.URL}
                                Comment={gift.Comment}
                                InsertUid={gift.InsertUid}
                            />
                        )
                    })}
                </PresentDetailsWrapper>
            </BaseContainer>
        </StyledWrapper>
    )
}

export default PresentRankingEdit