import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { User } from '../../state/User'
import BaseContainer from '../atoms/BaseContainer'
import StyledButton from '../atoms/StyledButton'
import StyledSelect from '../atoms/StyledSelect'

interface Props{
    users: User[],
    containerLabel: string,
    selectLabel: string,
    buttonLabel?:string
}

const StyledContainer = styled(BaseContainer)`
    & > div{
        box-sizing:border-box;
        display:flex;
        flex-direction:row;
        background-color: ${props => props.theme.palette.background.default};
        padding: 0.5em;
        border-radius:0.5em;
        margin-top:0.5em;
    }
    & > button {
        display:block;
        margin: 0.5em 0 0 auto;
    }
`

const onClick = () => {

}

const GiftRegisterForm = ({users,containerLabel,selectLabel,buttonLabel}:Props) => {
    return(
        <StyledContainer>
            <span>{containerLabel}</span>
            <StyledSelect selectLabel={selectLabel} users={users} />
            <TextField 
            fullWidth
            />
            <TextField 
            fullWidth
            />
            <StyledButton
            label={buttonLabel || '登録'}
            onClick={onClick}/>
        </StyledContainer>
    )
}

export default GiftRegisterForm