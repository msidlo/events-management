import MockAdapter from 'axios-mock-adapter'

const DEFAULT_REQUEST_TIMEOUT = 1000

export function mockAxios(axios) {

  const mock = new MockAdapter(axios)
  const url = new RegExp(`/*`);

  mock.onPost(url).reply(config => {
    // All calls for get must have .json file with mocked response
    const response = require(`./${config.url.replace('/', '')}.json`)
    return new Promise(function (resolve, reject) {
      setTimeout( () => {
        resolve([ 200, response ])
      }, DEFAULT_REQUEST_TIMEOUT);
    })
  })
}
