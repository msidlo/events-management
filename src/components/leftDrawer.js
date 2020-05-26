// @flow

import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import EventIcon from '@material-ui/icons/Event'
import { Link } from 'react-router-dom'

const drawerWidth = 310
const useStyles = makeStyles(theme => ({
drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}))

export function LeftDrawer(props: any) {

  const classes = useStyles()

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />

        <List>
          <ListItemLink
            icon={<EventIcon />}
            text='Events'
            to='/events-management/events'
            noPadding
            />

          <ListItemLink
            icon={<AddIcon />}
            text='Create events'
            to='/events-management/create'
            noPadding
            />
        </List>

      </Drawer>
  )
}

function ListItemLink(props) {
  const { icon, text, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
      [to],
  )

  return (
    <ListItem button component={renderLink}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}
