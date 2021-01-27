import React, { useState } from 'react'
import styled from 'styled-components'
import { InputLabel, MenuItem } from '@material-ui/core'
import { FormControl, Select } from '@material-ui/core'
import { User } from '../../state/User'

interface Props {
    users: User[],
    selectLabel: string
}

const Styled = styled.div`
    .form{
        width:100%;
    }
`

const StyledSelect: React.FC<Props> = ({ users,selectLabel }) => {
    const [selectedValue, setSelectedValue] = useState(users[0].Uid)
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedValue(event.target.value as string);
        console.log(selectedValue)
    }
    return (
        <Styled>
            <FormControl className='form'>
                <InputLabel>{selectLabel}</InputLabel>
                <Select value={selectedValue} onChange={handleChange}>
                    {users.map(user => {
                        if (user.Uid) {
                            return (
                                <MenuItem
                                    value={user.Uid}
                                    key={user.Uid}
                                >
                                    {user.Name}
                                </MenuItem>)
                        } else {
                            alert('ユーザー名の取得に失敗')
                        }
                    })}
                </Select>
            </FormControl>
        </Styled>
    )
}

export default StyledSelect