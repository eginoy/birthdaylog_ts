import React from 'react'
import styled from 'styled-components'
import { Present } from '../../types/Present'
import BaseContainer from '../atoms/BaseContainer'
import StyledTextField from '../atoms/StyledTextField'
import PresentRankingDetail from '../molecules/PresentRankingDetail'

interface Props {
    presents: Present[]
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

const PresentRankingEdit = ({ presents: presents }: Props) => {
    const userName = getUserName(presents[0].ToUid)
    const userAge = getAge(presents[0].Birthday)

    return (
        <StyledWrapper>
            <BaseContainer>
                <div className='birthday-user-info'>
                    <span>{userName}のプレゼントランキング</span>
                    <span>{userAge}歳の誕生日</span>
                </div>
                <PresentDetailsWrapper>
                    {presents.map(present => {
                        return (
                            <PresentRankingDetail
                                Rank={present.Rank}
                                Name={present.Name}
                                URL={present.URL}
                                Comment={present.Comment}
                                InsertUid={present.InsertUid}
                            />
                        )
                    })}
                </PresentDetailsWrapper>
            </BaseContainer>
        </StyledWrapper>
    )
}

export default PresentRankingEdit