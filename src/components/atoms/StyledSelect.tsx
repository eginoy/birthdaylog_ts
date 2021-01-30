import React, { SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { InputLabel, MenuItem } from '@material-ui/core'
import { FormControl, Select } from '@material-ui/core'
import { User } from '../../state/User'

interface Props {
    users: unknown[],
    selectLabel: string,
    defaultValue: unknown,
    setSelectedValue: React.Dispatch<SetStateAction<string | null>>
}

const Styled = styled.div`
    .form{
        width:100%;
    }
`

const StyledSelect = ({ users,selectLabel,defaultValue,setSelectedValue }:Props) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedValue(event.target.value as string);
    }
    return (
        <Styled>
            <FormControl className='form'>
                <InputLabel>{selectLabel}</InputLabel>
                <Select value={defaultValue} onChange={handleChange}>
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