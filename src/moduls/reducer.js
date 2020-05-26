// @flow

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
    default:
      return state
  }
}

export function fetchEvents(filter: EventsFilter) {
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: `/fetchEvents`,
        method: 'post',
        data: {
          filter
        },
      }
    } 
  }
}
