import React from 'react';
import {Reset} from 'styled-reset'
import styled from 'styled-components'
import * as path from './constants/path'
import {ThemeProvider as MaterialThemeProvider} from "@material-ui/styles"
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import theme from './constants/theme'
import {Switch,Route} from 'react-router'

function App() {
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider  theme={theme}>
        <React.Fragment>
          <Reset />
        </React.Fragment>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;