// @flow

/**
* State of the application
*/
export type State = {
  events: Array<any>;
}

export const initialState: State = {
  events: []
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
        events: action.payload.data.events
      }
    case GET_EVENTS_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}

export function fetchEvents(page: number, filter: string) {
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: `/fetchEvents`,
        params: {
          page,
          filter
        },
      }
    } 
  }
}
