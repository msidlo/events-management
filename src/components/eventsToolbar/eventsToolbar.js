// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../moduls/reducer'

import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  container: {
    '& > Button': {
      margin: theme.spacing(1)
    }
  }
})

type Prop = {
  classes: any
}

class EventsToolbar extends React.Component<Prop, any> {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Button variant="contained">Some</Button>
        <Button variant="contained">other</Button>
        <Button variant="contained">filter or tools</Button>
      </div>
    )
  }
}

const stateToProps = (state: State) => {
  return {
    // e.g. filter eventsFilter
  }
}

const mapDispatchToProps = {
  // tools method events
}

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(EventsToolbar))
