// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../moduls/reducer'
import {
  withRouter,
  Switch,
  Route,
} from 'react-router-dom'
import { LeftDrawer } from '../components/leftDrawer'
import { Routes } from '../routes'

type Prop = {}

class Dashboard extends React.Component<Prop, any> {

  routes: any

  constructor(props: Prop) {
    super(props)
    const r = Routes.find( e => e.path === '/events-management')
    this.routes = r && r.routes ? r.routes : []
  }

  render() {    
    return (
      <div style={Styles.wrapper}>
        <LeftDrawer/>
        <main style={Styles.content}>
          <Switch>
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                children={<route.component routes={route.routes} />}
              />
            ))}
          </Switch>
        </main>
      </div>
    )
  }
}

const Styles = {
  wrapper: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    justifyConent: 'flex-start',
    padding: 20,
    flexGrow: 1,
  }
}

const stateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = {}

export default withRouter(connect(stateToProps, mapDispatchToProps)(Dashboard))
