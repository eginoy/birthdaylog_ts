import GiftRegisterForm from './GiftRegisterForm'

export default {
    component: GiftRegisterForm,
    title:'GiftRegisterForm'
}

const Template = args => <GiftRegisterForm {...args}/>

export const Default = Template.bind({})
Default.args = {
    users:[
        { Uid: "eginoyUid", Name: "eginoy", Birthday: "2000-06-01" },
        { Uid: "tarouUid", Name: "tarou", Birthday: "2000-10-30" }
    ],
    containerLabel: 'プレゼント登録',
    selectLabel: '誰へのプレゼント?'
}