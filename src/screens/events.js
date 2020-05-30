// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State, EventsFilter } from '../moduls/reducer'
import { fetchEvents } from '../moduls/reducer'
import type { Event } from '../moduls/model'

import Typography from '@material-ui/core/Typography'
import EventsToolbar from '../components/eventsToolbar/eventsToolbar'
import EventsList from '../components/eventsList/eventsList'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.fontSizeLarge,
    flexShrink: 0,
  }
})

type Prop = {
  events: Array<Event>,
  eventsFilter: EventsFilter,
  classes: any,
  fetchEvents: Function,
}

class Events extends React.Component<Prop, any> {

  componentDidMount() {
    if (!this.props.events.length) {
      this.props.fetchEvents(this.props.eventsFilter)
    }
    // additional reload on button actions, time since last update,... (e. g. in events toolbar)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="h5">List of events</Typography>
        <EventsToolbar />
        <EventsList currentTime={new Date().getTime()} />
      </div>
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

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(Events))
