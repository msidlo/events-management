// @flow
import { config } from './config'

export type EventsFilter = {
  pagination: {
    page: number,
    size: number
  },
  filter: {
    // additional set up
  },
  sort: {
    // additional set up
  }
}

/**
* State of the application
*/
export type State = {
  events: Array<any>,
  eventsFilter: EventsFilter
}

export const initialState: State = {
  events: [],
  eventsFilter: {
    pagination: {
      page: 0,
      size: 20
    },
    filter: {},
    sort: {}
  }
}

export const GET_EVENTS = 'api/GET_EVENTS'
export const GET_EVENTS_SUCCESS = 'api/GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAIL = 'api/GET_EVENTS_FAIL'

export const CREATE_EVENT = 'api/CREATE_EVENT'
export const CREATE_EVENT_SUCCESS = 'api/CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_FAIL = 'api/CREATE_EVENT_FAIL'

export default function reducer(state: State = initialState, action: any): State {

  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state
      }
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload.data
      }
    case GET_EVENTS_FAIL:
      return {
        ...state
      }
    case CREATE_EVENT:
      return {
        ...state
      }
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload.data
        ]
      }
    case CREATE_EVENT_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}

export function fetchEvents(filter: EventsFilter) {
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: config.api.apiUrls.fetchEvents,
        method: 'post',
        data: {
          filter
        },
      }
    } 
  }
}

export function createEvent(event: Event) {
  return {
    type: CREATE_EVENT,
    payload: {
      request: {
        url: config.api.apiUrls.createEvent,
        method: 'post',
        data: {
          event
        },
      }
    } 
  }
}
