import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './moduls/redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Routes } from './routes'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { LIGHT_THEME } from './theme'

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={LIGHT_THEME}>
          <CssBaseline />
          <Router>
            <Switch>
              {Routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
