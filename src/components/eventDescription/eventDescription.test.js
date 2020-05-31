import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import EventDescription from './eventDescription'
import { LIGHT_THEME } from '../../theme'

const mockEvent = {
  "id":200,
  "name":"Event name #1",
  "participants": [
    "Silvia",
    "Lubo",
    "Martin"
  ],
  "startTime":"2020-05-20T12:48:00.000Z",
  "endTime":"2020-05-21T12:48:00.000Z",
  "note":"Lorem Ipsum is simply dummy text"
}

describe('Event description', () => {

  it('should present event data', () => {
    const { getByText } = render(<ThemeProvider theme={LIGHT_THEME}> <EventDescription event={mockEvent} /> </ThemeProvider>)
    const dateFrom = getByText('From: 20. 5. 2020, 14:48:00')
    const dateTo = getByText('To: 21. 5. 2020, 14:48:00')
    const participants = getByText('Silvia, Lubo, Martin')
    const note = getByText('Lorem Ipsum is simply dummy text')

    expect(dateFrom).toBeInTheDocument()
    expect(dateTo).toBeInTheDocument()
    expect(participants).toBeInTheDocument()
    expect(note).toBeInTheDocument()
  })

  afterEach(() => {
    cleanup()
  })
})

