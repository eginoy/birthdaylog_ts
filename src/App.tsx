import React from 'react';
import { RecoilRoot } from 'recoil'
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './constants/theme'
import NavigationBar from './components/organisms/NavigationBar';
import StyledButton from './components/atoms/StyledButton';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthGuard from './auth/AuthGuard';
import { GIFT_REGISTRATION, LOGIN } from './constants/path';
import { GiftRegistration, Login } from './components/pages';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
`

const LogInButtonWrapper = styled.div`
  margin-top: 20em;
  display:flex;
  justify-content:center;
`

function App() {
  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <RecoilRoot>
          <Router>
            <Switch>
              <React.Fragment>
                <GlobalStyle />
                <NavigationBar />
                <LogInButtonWrapper>
                  <div>
                    <StyledButton label={'Googleアカウントでログイン'} onClick={function () { }} />
                  </div>
                </LogInButtonWrapper>
                <Route exact path={LOGIN} component={Login}></Route>
                <AuthGuard>
                  <Switch>
                    <Route exact path={GIFT_REGISTRATION} component={GiftRegistration}></Route>
                  </Switch>
                </AuthGuard>
              </React.Fragment>
            </Switch>
          </Router>
        </RecoilRoot>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;