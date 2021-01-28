import React from 'react'
import { User } from '../../state/User'
import BaseContainer from '../atoms/BaseContainer'
import StyledSelect from '../atoms/StyledSelect'

interface Props{
    users: User[],
    containerLabel: string,
    selectLabel: string
}

const GiftRegisterForm = ({users,containerLabel,selectLabel}:Props) => {
    return(
        <BaseContainer>
            <StyledSelect selectLabel={selectLabel} users={users} />
        </BaseContainer>
    )
}

export default GiftRegisterForm