import styled from 'styled-components'
import StyledLabel from '../atoms/StyledLabel'
import {PresentDetail} from '../../types/Present'

const Wrapper = styled.div`
    padding:0.5em;
    background-color:${props => props.theme.palette.background.default};
    border-radius:0.5em;
    & > div{
        margin-left:1.5em;
    }
    .rank-label{
        display:inline-block;
        width:3em;
        text-align:right;
    }
`

const PresentRankingDetail = ({Rank,Name,URL,Comment,InsertUid}:PresentDetail) =>{
    return (
        <Wrapper>
            <span className='rank-label'>{Rank === 1 ? '👑' : null}{Rank}位</span>
            <StyledLabel keyLabel='商品名' linkLabel={Name} value={URL} isLink={true} />
            <StyledLabel keyLabel='提案者' value={InsertUid} />
            <StyledLabel keyLabel='レビュー' value={Comment} />
        </Wrapper>
    )
}

export default PresentRankingDetail