import StyledButton from './StyledButton'
import StyledLabel from './StyledLabel'

export default {
    component: StyledLabel,
    title:'StyledLabel'
}

const Template = args => <StyledLabel {...args}/>

export const Default = Template.bind({})
Default.args = {
    keyLabel: 'レビュー',
    value: '欲しかったものです',
    isLink: false
}

export const enableLink = args => <StyledLabel {...args} />
enableLink.args = {
    keyLabel: '商品名',
    value: 'https://www.amazon.co.jp/gp/product/B08KDVW9Z3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1',
    linkLabel: 'ATR2100x-USB',
    isLink: true
}