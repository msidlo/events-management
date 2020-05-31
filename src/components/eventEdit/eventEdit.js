// @flow

import React from 'react'
import { connect } from 'react-redux'
import type { State } from '../../moduls/reducer'
import { createEvent } from '../../moduls/reducer'
import type { Event } from '../../moduls/model'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { DateTimePicker } from 'formik-material-ui-pickers'
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { EventValidationSchema } from '../../moduls/validation'

import { withStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
  root: {
    width: '400px',
    '& > form': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

type Prop = {
  event: Event,
  classes: any,
  createEvent: Function
}

// DateTimePicker can't handle minimum time to pick (e.g. from 5am).
// This feature will be included in v4 which is soon to release.
// Release v4 - minDateTime (currently v4.0.0-alpha.7)
// https://github.com/mui-org/material-ui-pickers/releases
class EventEdit extends React.Component<Prop, any> {

  getDefaultEvent() {
    return {
      name: '',
      startTime: new Date(),
      endTime: new Date(),
      participants: '',
      note: ''
    }
  }

  onSubmit(values, { setSubmitting, resetForm }) {
    setSubmitting(false)
    resetForm(this.getDefaultEvent())
    // if it was existing event, dispatch save event (to update) instead of create
    this.props.createEvent(values)
  }

  hasErrors(errors) {
    return !!Object.keys(errors).length
  }

  render() {
    const event: any = this.props.event || this.getDefaultEvent()
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Formik
            initialValues={{ ...event }}
            validationSchema={EventValidationSchema}
            onSubmit={this.onSubmit.bind(this)}
          >
            {({ values, touched, isSubmitting, errors, submitForm }) => (
              <Form autoComplete="off">
                <Field
                  component={TextField}
                  name="name"
                  type="text" 
                  label="Name"
                  required />
                <br />
                <Field
                  component={DateTimePicker}
                  name="startTime"
                  label="Start of the event"
                  disablePast
                  required />
                <br />
                <Field
                  component={DateTimePicker}
                  minDate={values.startTime}
                  name="endTime"
                  label="End of the event"
                  required />
                <br />
                {/* This could be more complex input with */}
                <Field
                  component={TextField}
                  name="participants"
                  type="text" 
                  label="Participants"
                  placeholder="Silvia, Lubo, Martin" />
                <br />
                <Field
                  component={TextField}
                  name="note"
                  type="text"
                  label="Note"
                  placeholder="During this event we'll talk..."
                  multiline
                  rows={4} />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting || this.hasErrors(errors)}
                  onClick={submitForm}>Save</Button>
              </Form>
            )}
          </Formik>
        </MuiPickersUtilsProvider>
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

export default connect(stateToProps, mapDispatchToProps)(withStyles(useStyles)(EventEdit))
