import styled from 'styled-components'

interface Props{
    keyLabel: string
    value: string
    linkLabel?: string
    isLink: boolean
}

const ThemeLabel = styled.div`
    display: inline-block;
    padding: 0.5em;
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.primary.main};
    border-radius: 0.5em;
    a {
        color: ${props => props.theme.palette.text.secondary};
    }
`

const StyledLabel = ({keyLabel,value,linkLabel,isLink}:Props) => {
    return (
        <ThemeLabel>
            <span>{keyLabel}: </span>{
                isLink ?
                <a href={value}>{linkLabel}</a>
                :
                <span>{value}</span>
                }
        </ThemeLabel>
    )
}

export default StyledLabel