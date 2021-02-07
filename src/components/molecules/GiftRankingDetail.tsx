import styled from 'styled-components'
import StyledLabel from '../atoms/StyledLabel'
import {GiftDetail} from '../../types/Gift'

const Wrapper = styled.div`
    padding:0.5em;
    background-color:${props => props.theme.palette.background.default};
    border-radius:0.5em;
    & > div{
        margin-left:1.5em;
    }
`

const GiftRankingDetail = ({Rank,Name,URL,Comment,InsertUid}:GiftDetail) =>{
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