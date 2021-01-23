import React from 'react';
import { RecoilRoot } from 'recoil'
import { Reset } from 'styled-reset'
// import * as path from './constants/path'
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './constants/theme'
import NavigationBar from './components/organisms/NavigationBar';
import StyledButton from './components/atoms/StyledButton';
import styled from 'styled-components'
// import {Switch,Route} from 'react-router'

const LogInButtonWrapper = styled.div`
  margin-top: 20em;
  display:flex;
  justify-content:center;
`

function App() {
  return (
    <RecoilRoot>
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <React.Fragment>
            <NavigationBar />
            <LogInButtonWrapper>
              <div>
                <StyledButton label={'Googleアカウントでログイン'} onClick={function () { }} />
              </div>
            </LogInButtonWrapper>
            <Reset />
          </React.Fragment>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </RecoilRoot>
  );
}

export default App;