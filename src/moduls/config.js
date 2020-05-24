// @flow

interface ApiConfig {
  apiBaseUrl: string,
  apiUrls: {
    fetchEvents: string
  }
}

export interface Configuration {
  api: ApiConfig,
}

let apiBaseUrl = 'https://www.cool.com/'
let fetchEvents = 'fetchEvents'

if(process.env.NODE_ENV !== 'production') {
    apiBaseUrl = 'https://www.dev.cool.com/'
}

export const config: Configuration = {
  api: {
    apiBaseUrl,
    apiUrls: {
      fetchEvents
    }
  },
}
