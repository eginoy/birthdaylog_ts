import styled from 'styled-components'

const BaseContainer = styled.div`
    width:80%;
    height:auto;
    border-radius:0.5em;
    box-shadow: 6px 6px 5px;
    margin: 2em auto;
    padding:0.5em 1em;
    background-color: ${props => props.theme.palette.primary.main};
`

export default BaseContainer