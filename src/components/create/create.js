// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../moduls/reducer'

import './create.css';

type Prop = {}

class Create extends React.Component<Prop, any> {

  render() {
    return (
      <h3>Hello, create new event</h3>
    )
  }

}

const stateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(stateToProps, mapDispatchToProps)(Create)
