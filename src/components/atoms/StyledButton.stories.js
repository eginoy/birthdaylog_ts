import StyledButton from './StyledButton'

export default {
    component: StyledButton,
    title:'StyledButton'
}

const Template = args => <StyledButton {...args}/>

const onClick = () => {
    alert('button click')
}

export const Default = Template.bind({})
Default.args = {
    label: '登録',
    onClick: onClick
}