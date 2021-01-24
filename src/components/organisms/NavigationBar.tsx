import styled from 'styled-components'
import { AppBar, Button, Toolbar } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import {userState} from '../../state/User'
import {Link} from 'react-router-dom'
import UserName from '../atoms/UserName';
import { GIFT_REGISTRATION } from '../../constants/path';
import * as auth from '../../auth/auth'

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
const NavigationButton = styled(Button)`
    &:hover{
        color:${props => props.theme.palette.text.secondary}
    }
`

const logout = () =>{
    auth.logout()
}

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
                    <NavigationButton>
                        ランキング編集
                    </NavigationButton>
                    <NavigationButton>
                        <Link className='link' to={GIFT_REGISTRATION}>プレゼント登録</Link>
                    </NavigationButton>
                    <NavigationButton onClick={logout}>
                        ログアウト
                    </NavigationButton>
                </ToolbarRight>
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavigationBar