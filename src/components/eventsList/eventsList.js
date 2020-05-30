// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { Event } from '../../moduls/model'
import type { State } from '../../moduls/reducer'

import List from '@material-ui/core/List'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EventDescription from '../eventDescription/eventDescription'
import ListSubheader from '@material-ui/core/ListSubheader'
import Box from '@material-ui/core/Box'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  heading: {
    fontSize: theme.typography.fontSizeLarge,
    flexShrink: 0,
  },
  ListSubheader: {
    backgroundColor: theme.palette.lightGrey
  },
  list: {
    padding: 0
  }
})

type Prop = {
  events: Array<Event>,
  currentTime: number, // in milliseconds
  classes: any
}

class EventsList extends React.Component<Prop, any> {

  constructor(props: Prop) {
    super(props)
    this.state = {
      expandEventDetail: false
    }
  }

  toggleItem(item: Event, event: any, expanded: boolean) {
    this.setState({
      expandEventDetail: expanded ? item.id : false
    })
  }

  splitEventsByTime(events: Array<Event>, currentTime: number) {
    const past = [], current = [], future = []
    events.forEach( (event: Event) => {
      const beginning = new Date(event.startTime).getTime()
      const end = new Date(event.endTime).getTime()
      if (end < currentTime) {
        return past.push(event)
      } else if (beginning < currentTime) {
        return end > currentTime ? current.push(event) : future.push(event)
      }
      future.push(event)
    })
    return { past, current, future }
  }

  render() {
    const { classes } = this.props
    const { past, current, future } = this.splitEventsByTime(this.props.events, this.props.currentTime)
    // this would be defined separatelly with all translations
    const titles = ['Past events:', 'Current Events:', 'Upcoming events:']

    return (
      <Box l={0}>
        <List className={classes.list} subheader={<li />}>
          {[past, current, future].map((events, i) => (
            <li key={`event-list-section-${i}`} data-testid={`event-list-section-${i}`} className={classes.listSection}>
              <ul>
                <ListSubheader className={classes.ListSubheader}>{`${titles[i]}`}</ListSubheader>
                  {events.map( (e: Event) => (
                    <ExpansionPanel
                      key={`event-${e.id}`}
                      expanded={this.state.expandEventDetail === e.id}
                      onChange={this.toggleItem.bind(this, e)}
                      >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography className={classes.heading}>{e.name}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails >
                        <div data-testid="list-item">
                          <EventDescription event={e} />
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
    )
  }
}

const stateToProps = (state: State) => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = {}

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(EventsList))
