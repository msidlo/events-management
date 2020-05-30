import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from '../../moduls/reducer'
import { render, within, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { LIGHT_THEME } from '../../theme'
import EventsList from './eventsList'

const mockEvents = [
  // past event
  {
     "id":200,
     "name":"Event name #1",
     "participants":[
        "Silvia",
        "Lubo",
        "Martin"
     ],
     "startTime":"2020-05-20T12:48:00.000Z",
     "endTime":"2020-05-21T12:48:00.000Z",
     "note":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
  // current event
  {
    "id":231,
    "name":"Event name #333",
    "participants":[
        "Silvia",
        "Lubo",
        "Martin"
    ],
    "startTime":"2020-05-30T05:48:00.000Z",
    "endTime":"2020-06-19T23:48:00.000Z",
    "note":"Lorem Ipsum is simply dummy"
 },
 // upcoming event
 {
    "id":218,
    "name":"Event name #19",
    "participants":[
        "Silvia",
        "Lubo",
        "Martin"
    ],
    "startTime":"2020-06-28T12:48:00.000Z",
    "endTime":"2020-06-29T12:48:00.000Z",
    "note":"Lorem Ipsum is simply dummy"
  }
]
const currentTime = new Date("2020-05-30T11:48:00.000Z").getTime()

const mockStore = configureStore([])

describe('EventList', () => {

  let store, component

  beforeEach(() => {
    store = mockStore({
      ...initialState,
      events: mockEvents
    })

    component = render(
      <Provider store={store}>
        <ThemeProvider theme={LIGHT_THEME}>
          <EventsList currentTime={currentTime}/>
        </ThemeProvider>
      </Provider>
    )
  })

  it('should contains 3 titles for events based on time (past, current, upcoming)', () => {
    const { getByText } = component
    const titles = ['Past events:', 'Current Events:', 'Upcoming events:']
    titles.forEach(title => {
      const text = getByText(title)
      expect(text).toBeInTheDocument()
    })
  })

  it('should contain 1 event per each section', () => {
    const { getByTestId } = component
    const sections = ['event-list-section-0', 'event-list-section-1', 'event-list-section-2']
    sections.forEach(section => {
      expect(within(getByTestId(section)).getAllByTestId('list-item').length).toBe(1)
    })
    expect(true).toEqual(true)
  })

  afterEach(() => {
    cleanup()
  })
})
