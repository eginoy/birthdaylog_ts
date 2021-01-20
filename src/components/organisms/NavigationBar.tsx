import styled from 'styled-components'
import { AppBar, Button, Toolbar } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
    *{
        display: flex;
        justify-content: space-between;
    }
`
const ToolbarLeft = styled.div`
    
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

export default function NavigationBar() {
    return (
        <StyledAppBar>
            <Toolbar>
                <StyledTypography variant="h6">
                    ٩(ŏ﹏ŏ｡ )۶
                </StyledTypography>
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