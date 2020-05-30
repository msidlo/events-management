// @flow

import { createMuiTheme } from '@material-ui/core/styles'

export const LIGHT_THEME = createMuiTheme({
  palette: {
    type: 'light',
    lightGrey: '#eeeeee'
  },
  typography: {
    h5: {
      fontWeight: 500,
    },
    fontSizeSmall : 12,
    fontSizeMedium : 14,
    fontSizeLarge : 18
  }
})
