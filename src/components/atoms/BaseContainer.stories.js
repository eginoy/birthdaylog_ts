import BaseContainer from './BaseContainer'
import StyledButton from './StyledButton'

export default {
    component: BaseContainer,
    title:'BaseContainer'
}

const Template = args => <BaseContainer />

export const Default = Template.bind({});
Default.args = {}