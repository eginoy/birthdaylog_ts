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
import AuthRoute from './auth/AuthRoute';
import * as auth from './auth/auth'
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

const onClick = () => {
  auth.googleLogin();
}

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
                    <StyledButton label={'Googleアカウントでログイン'} onClick={onClick} />
                  </div>
                </LogInButtonWrapper>
                <Route exact path={LOGIN} component={Login}></Route>
                <AuthRoute exact path={GIFT_REGISTRATION} Component={GiftRegistration}></AuthRoute>
              </React.Fragment>
            </Switch>
          </Router>
        </RecoilRoot>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;