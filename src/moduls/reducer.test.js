import {
  createEvent,
  initialState,
  CREATE_EVENT,
  GET_EVENTS_SUCCESS,
  CREATE_EVENT_SUCCESS
} from './reducer'
import reducer from './reducer'
import { config } from './config'


const mockGetEventsResult = [{
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
}]

const mockCreateEventResult = {
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
}

describe('Reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should create an action to create an event', () => {
    const event = {
      name: 'name'
    }
    const expectedAction = {
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
    expect(createEvent(event)).toEqual(expectedAction)
  })

  it('should add new created event', () => {
    const axiosCreateEventSuccess = {
      type: CREATE_EVENT_SUCCESS,
      payload: {
        data: mockCreateEventResult
      }
    }
    const expectedStoreState = {
      events: [mockCreateEventResult]
    }
    expect(reducer({events: []}, axiosCreateEventSuccess)).toEqual(expectedStoreState)
  })

  it('should store retrieved events from server', () => {
    const axiosGetEventsSuccess = {
      type: GET_EVENTS_SUCCESS,
      payload: {
        data: mockGetEventsResult
      }
    }
    const expectedStoreState = {
      ...initialState,
      events: mockGetEventsResult
    }
    expect(reducer(undefined, axiosGetEventsSuccess)).toEqual(expectedStoreState)
  })
})
