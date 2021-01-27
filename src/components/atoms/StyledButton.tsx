import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface Props{
    label: string
    onClick: () => void
}

const ThemeButton = styled(Button)`
    &.styled{
        background-color:${props => props.theme.palette.secondary.main};
    }
    &.styled:hover{
        background-color: ${props => props.theme.palette.secondary.light}
    }
    span{
        color:white;
    }
`

const StyledButton: React.FC<Props> = ({label,onClick}) => {
    return(
        <ThemeButton className="styled" onClick={onClick}>
            {label}
        </ThemeButton>
    )
}

export default StyledButton