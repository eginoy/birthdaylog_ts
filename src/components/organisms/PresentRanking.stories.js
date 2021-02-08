import GiftRanking from './PresentRanking'

export default {
    component: GiftRanking,
    title:'GiftRanking'
}

const Template = (args) => <GiftRanking {...args}/>

export const Default = Template.bind({})
Default.args = {
    
}