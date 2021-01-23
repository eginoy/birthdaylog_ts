import React from 'react'

interface Props{
    name:string | null
}

const UserName: React.FC<Props> = ({name}) => {
    return (
        <span>{name || 'ゲスト'}</span>
    )
}

export default UserName