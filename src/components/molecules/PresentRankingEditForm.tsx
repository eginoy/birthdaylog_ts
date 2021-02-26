import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { User } from '../../state/User'
import { Present } from '../../types/Present'
import BaseContainer from '../atoms/BaseContainer'
import StyledButton from '../atoms/StyledButton'
import StyledSelect from '../atoms/StyledSelect'
import StyledTextField from '../atoms/StyledTextField'

interface Props {
    present: Present
}

type TextFieldValue = {
    value: string,
    hasError: boolean,
    fieldType: 'productName' | 'productURL'
}
const StyledContainer = styled(BaseContainer)`
    span{
        color:${props => props.theme.palette.text.primary};
        font-size: 0.9em;
    }
    & > div{
        display:flex;
        flex-direction: column;
        background-color: ${props => props.theme.palette.background.default};
        padding: 0.5em;
        border-radius:0.5em;
        margin-top:0.5em;
        box-sizing:border-box;
    }
    & > button {
        display:block;
        margin: 0.5em 0 0 auto;
    }
`

const isURL = (input: string) => {
    var reg = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return !reg.test(input);
}

const isNullOrEmptyOrWhiteSpace = (input: string) => {
    return !input || !input.trim()
}

const validValue = (setter: React.Dispatch<React.SetStateAction<TextFieldValue>>,fieldValue: TextFieldValue) => {
    if(fieldValue.fieldType === 'productName'){
        setter({...fieldValue,hasError: isNullOrEmptyOrWhiteSpace(fieldValue.value)})
    }else{
        setter({...fieldValue,hasError: isURL(fieldValue.value)})
    }
}

const getHelperText = (field: TextFieldValue):string => {
    const requireMessage = 'は必須入力項目です。'
    if(field.fieldType === 'productName'){
        return '商品名' + requireMessage
    }else{
        return 'URLを入力してください'
    }
}

const PresentRankingEditForm = ({present}: Props) => {
    const [isClicked,setIsClicked] = useState(false)
    const [productName,setProductName] = useState<TextFieldValue>({
        value: '',
        hasError: false,
        fieldType: 'productName'
    })
    const [productURL,setProductURL] = useState<TextFieldValue>({
        value:'',
        hasError: false,
        fieldType: 'productURL',
    })
    
    useEffect(()=>{
        if(isClicked) {
            validValue(setProductName,productName)
            validValue(setProductURL,productURL)
        }
    },[isClicked,productName.value,productURL.value])

    const handleChangeProductName = (e: React.ChangeEvent<{value: string}>) => {
        setProductName({...productName,value:e.target.value})
    }
    
    const handleChangeProductURL = (e: React.ChangeEvent<{value: string}>) => {
        setProductURL({...productURL,value:e.target.value})
    }
    
    const handleClick = () => {
        setIsClicked(true)
        console.log(productName,productURL)
    }
    /*
    MEMO: 順位入力、商品名表示、レビュー入力
    登録、公開ボタン押下でデータ登録するように実装する
    */
    return(
        <StyledContainer>
            <StyledTextField 
                value={productURL.value}
                onChange={e => handleChangeProductURL(e)}
                error={productURL.hasError}
                helperText = { productURL.hasError ? getHelperText(productURL) : null}
            />
            <StyledTextField 
                fullWidth
                label='商品名'
                value={productName.value}
                onChange={e => handleChangeProductName(e)}
                error={productName.hasError}
                helperText={ productName.hasError ?  getHelperText(productName) : null}
            />
            <StyledButton
                label='登録'
                onClick={handleClick}
            />
        </StyledContainer>
    )
}

export default PresentRankingEditForm