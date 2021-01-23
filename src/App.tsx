import React from 'react';
import {RecoilRoot} from 'recoil'
import {Reset} from 'styled-reset'
// import styled from 'styled-components'
// import * as path from './constants/path'
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/styles"
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import theme from './constants/theme'
import NavigationBar from './components/organisms/NavigationBar';
// import {Switch,Route} from 'react-router'

function App() {
  return (
    <RecoilRoot>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <React.Fragment>
            <NavigationBar />
            <Reset />
          </React.Fragment>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </RecoilRoot>
  );
}

export default App;