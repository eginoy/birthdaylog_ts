import React from 'react'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'

const StyledTextField = styled(TextField)`
    & {
        display:flex;
        flex-direction:column;
    }
    & > label {
        margin-left: 0.5em;
        padding:0.5em 0 0 0;
    }
`
export default StyledTextField