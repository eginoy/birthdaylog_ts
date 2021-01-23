import styled from 'styled-components'
import { AppBar, Button, Toolbar } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import UserName from '../atoms/UserName';
import { useRecoilValue } from 'recoil';
import {userState} from '../../state/User'

const StyledAppBar = styled(AppBar)`
    *{
        display: flex;
        justify-content: space-between;
    }
`
const ToolbarLeft = styled.div`
    
`

const WellComeUserText = styled.span`
    display: inline-block;
    margin: auto 1em;
`

const ToolbarRight = styled.div`
    
`

const StyledTypography = styled(Typography)`
    color: ${props => props.theme.palette.text.secondary};

`
const StyledButton = styled(Button)`
    &:hover{
        color:${props => props.theme.palette.text.secondary}
    }
`

const NavigationBar: React.FC = () => {
    const user = useRecoilValue(userState)
    return (
        <StyledAppBar>
            <Toolbar>
                <ToolbarLeft>
                    <StyledTypography variant="h6">
                        ٩(ŏ﹏ŏ｡ )۶
                </StyledTypography>
                <WellComeUserText>
                    <span>ようこそ、{<UserName name={user.Name}/>}さん</span>
                </WellComeUserText>
                </ToolbarLeft>
                <ToolbarRight>
                    <StyledButton>
                        ランキング編集
                    </StyledButton>
                    <StyledButton>
                        プレゼント登録
                    </StyledButton>
                    <StyledButton>
                        ログアウト
                    </StyledButton>
                </ToolbarRight>
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavigationBar