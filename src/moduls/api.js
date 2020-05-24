import { config } from './config'
import axios from 'axios'
import { mockAxios } from '../mocks/axios'

class Api {

  constructor() {
    this.client = axios.create({
      baseURL: config.api.apiBaseUrl,
      responseType: 'json'
    })

    if (process.env.REACT_APP_USE_MOCKS === 'true') {
      mockAxios(this.client)
    }
  }

  getAxiosClient() {
    return this.client
  }
}

export const api = new Api()
