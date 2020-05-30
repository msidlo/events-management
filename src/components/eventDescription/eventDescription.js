// @flow

import React from 'react'
import type { Event } from '../../moduls/model'

import { makeStyles } from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SubjectIcon from '@material-ui/icons/Subject'
import PeopleIcon from '@material-ui/icons/People'

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px'
  },
  icon: {
    width: theme.sizes.icons.regular
  },
  timeDate: {
    fontSize: theme.typography.fontSizeMedium
  }
}))

export default function EventDescription(props: {event: Event}) {

  const classes = useStyles()

  return (
    <div>
      <div className={classes.row}>
        <AccessTimeIcon className={classes.icon} />
        <span className={classes.timeDate}>{`From: ${new Date(props.event.startTime).toLocaleString('sk')}`}</span>
      </div>
      <div className={classes.row}>
        <AccessTimeIcon className={classes.icon} />
        <span className={classes.timeDate}>{`To: ${new Date(props.event.endTime).toLocaleString('sk')}`}</span>
      </div>
      <div className={classes.row}>
        <PeopleIcon className={classes.icon} />
        <span>{props.event.participants.join(', ')}</span>
      </div>
      <div className={classes.row}>
        <SubjectIcon className={classes.icon} />
        <span>{props.event.note}</span>
      </div>
    </div>
  )
}
