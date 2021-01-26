import React from 'react'
import styled from 'styled-components'

interface Props{
    label:string
}

const Wrapper = styled.div`
    width:80%;
    height:auto;
    border-radius:0.5em;
    box-shadow: 6px 6px 5px;
    margin: 2em auto;
    padding:1em;
    background-color: ${props => props.theme.palette.primary.main};
    span{
        color:${props => props.theme.palette.text.primary};
        font-size: 0.9em;
    }
`

const BaseContainer: React.FC<Props> = ({label}) =>{
    return (
        <Wrapper>
            <span>{label}</span>
        </Wrapper>
    )
}

export default BaseContainer