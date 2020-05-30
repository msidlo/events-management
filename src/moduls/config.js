// @flow

interface ApiConfig {
  apiBaseUrl: string,
  apiUrls: {
    fetchEvents: string,
    createEvent: string
  }
}

export interface Configuration {
  api: ApiConfig,
}

let apiBaseUrl = 'https://www.cool.com/'
let fetchEvents = '/fetchEvents'
let createEvent = '/createEvent'

if(process.env.NODE_ENV !== 'production') {
    apiBaseUrl = 'https://www.dev.cool.com/'
}

export const config: Configuration = {
  api: {
    apiBaseUrl,
    apiUrls: {
      fetchEvents,
      createEvent
    }
  },
}
