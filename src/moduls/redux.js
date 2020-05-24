
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducer'
import axiosMiddleware from 'redux-axios-middleware'
import { api } from './api'
import storage from 'redux-persist/lib/storage'

// Persist redux state
const persistConfig = {
  key: 'events-management',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// Middlewares
const axios = applyMiddleware(axiosMiddleware(api.getAxiosClient()))

/** Custom logger
* See store state after each dispatch
*/
const logger = applyMiddleware(store => next => action => {
  next(action)
  if (process.env.NODE_ENV === 'development') {  
    console.log({
        name: action.type,
        value: store.getState()
    })
  }
})

export const store = createStore(persistedReducer, compose(axios, logger))
export const persistor = persistStore(store)
