import { config } from './config'
import axios from 'axios'

class Api {

  constructor() {
    this.client = axios.create({
      baseURL: config.api.apiBaseUrl,
      responseType: 'json'
    })

  }

  getAxiosClient() {
    return this.client
  }
}

export const api = new Api()
