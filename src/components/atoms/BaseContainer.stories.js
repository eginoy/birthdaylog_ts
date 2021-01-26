import BaseContainer from './BaseContainer'

export default {
    component: BaseContainer,
    title:'BaseContainer'
}

const Template = args => <BaseContainer {...args}/>

export const Default = Template.bind({});
Default.args = {
    label: 'プレゼント登録'
}