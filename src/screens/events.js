// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State, EventsFilter } from '../moduls/reducer'
import { fetchEvents } from '../moduls/reducer'

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
  },
  boxHeight: {
    height: '75%',
    overflow: 'scroll'
  }
})

type Prop = {
  eventsFilter: EventsFilter,
  classes: any,
  fetchEvents: Function,
}

class Events extends React.Component<Prop, any> {

  componentDidMount() {
    // possibly fetch only when there is non yet
    // additional reload on button actions (e. g. in events toolbar)
    this.props.fetchEvents(this.props.eventsFilter)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="h5">List of events</Typography>
        <EventsToolbar />
        <div className={classes.boxHeight}>
          <EventsList class={classes.boxHeight} currentTime={new Date().getTime()} />
        </div>
      </div>
    )
  }
}

const stateToProps = (state: State) => {
  return {
    eventsFilter: state.eventsFilter
  }
}

const mapDispatchToProps = {
  fetchEvents
}

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(Events))
