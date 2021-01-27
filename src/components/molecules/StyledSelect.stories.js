import StyledSelect from './StyledSelect'

export default {
    component: StyledSelect,
    title:'StyledSelect'
}

const Template = args => <StyledSelect {...args}/>

export const Default = Template.bind({})
Default.args = {
    users:[
        { Uid: "eginoyUid", Name: "eginoy", Birthday: "2000-06-01" },
        { Uid: "tarouUid", Name: "tarou", Birthday: "2000-10-30" }
    ]
}