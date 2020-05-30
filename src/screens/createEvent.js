// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../moduls/reducer'
import { createEvent } from '../moduls/reducer'

import Typography from '@material-ui/core/Typography'
import EventEdit from '../components/eventEdit/eventEdit'
import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
})

type Prop = {
  classes: any,
  createEvent: Function,
}

class CreateEvent extends React.Component<Prop, any> {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="h5">Create new event</Typography>
        <EventEdit />
      </div>
    )
  }
}

const stateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = {
  createEvent
}

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(CreateEvent))
