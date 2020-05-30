// @flow

import { createMuiTheme } from '@material-ui/core/styles'

// Credits to colors https://material.io/resources/color/#!/

export const LIGHT_THEME = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#5efc82',
      main: '#00c853',
      dark: '#009624',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d7ffd9',
      main: '#a5d6a7',
      dark: '#75a478',
      contrastText: '#fff',
    },
    lightGrey: '#eeeeee'
  },
  typography: {
    h5: {
      fontWeight: 500,
    },
    fontSizeSmall : 12,
    fontSizeMedium : 14,
    fontSizeLarge : 18
  },
  sizes: {
    icons: {
      regular: '60px'
    }
  }
})
