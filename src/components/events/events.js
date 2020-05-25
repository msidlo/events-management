// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../moduls/reducer'

import './events.css'

type Prop = {}

class Events extends React.Component<Prop, any> {

  render() {
    return (
      <h3>Hello, there will be a list of events</h3>
    )
  }

}

const stateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(stateToProps, mapDispatchToProps)(Events)
