import styled from 'styled-components'
import StyledLabel from '../atoms/StyledLabel'
import {GiftRankingDetail as DetailType} from '../../types/Gift'

const Wrapper = styled.div`

`

const GiftRankingDetail = ({Rank,Name,URL,Comment,InsertUid}:DetailType) =>{
    return (
        <Wrapper>
            <span>{Rank === 1 ? '👑' : null}{Rank}位</span>
            <StyledLabel keyLabel='商品名' linkLabel={Name} value={URL} isLink={true} />
            <StyledLabel keyLabel='提案者' value={InsertUid} />
            <StyledLabel keyLabel='レビュー' value={Comment} />
        </Wrapper>
    )
}

export default GiftRankingDetail