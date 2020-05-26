// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { Event } from '../../moduls/model'
import type { State, EventsFilter } from '../../moduls/reducer'
import { fetchEvents } from '../../moduls/reducer'

import './events.css'

type Prop = {
  events: Array<Event>,
  eventsFilter: EventsFilter,
  fetchEvents: Function,
}

class Events extends React.Component<Prop, any> {

  componentDidMount() {
    this.props.fetchEvents(this.props.eventsFilter)
  }

  render() {
    return (
      <h3>Hello, there will be a list of events</h3>
    )
  }

}

const stateToProps = (state: State) => {
  return {
    events: state.events,
    eventsFilter: state.eventsFilter
  }
}

const mapDispatchToProps = {
  fetchEvents
}

export default connect(stateToProps, mapDispatchToProps)(Events)
