import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState, fetchEvents } from '../moduls/reducer'
import { render, cleanup } from '@testing-library/react'
import Events from './events'
import { ThemeProvider } from '@material-ui/core/styles'
import { LIGHT_THEME } from '../theme'

const mockStore = configureStore([])

describe('Events screen - store without data', () => {

  let store, component

  beforeEach(() => {
    store = mockStore(initialState)
    store.dispatch = jest.fn()

    component = render(
      <Provider store={store}>
        <ThemeProvider theme={LIGHT_THEME}>
          <Events />
        </ThemeProvider>
      </Provider>
    )
  })

  it('should fetch events when none in store', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(fetchEvents(initialState.eventsFilter))
  })

  afterEach(() => {
    cleanup()
  })
})

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

describe('Events screen - store with data', () => {

  let store, component

  beforeEach(() => {
    store = mockStore({
      ...initialState,
      events: [mockEvent]
    })
    store.dispatch = jest.fn()

    component = render(
      <Provider store={store}>
        <ThemeProvider theme={LIGHT_THEME}>
          <Events />
        </ThemeProvider>
      </Provider>
    )
  })

  it('should NOT fetch events when already some in store,', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(0)
  })

  afterEach(() => {
    cleanup()
  })
})
