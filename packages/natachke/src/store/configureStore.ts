import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import config from 'config'
import { persistStore } from 'redux-persist'
import { preparePersistRootReducer } from '../persistStorage'

import { createReducer } from './reducers'

export function configureAppStore() {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ]

  const isDevelopMode = config.isDevelopMode

  const store: Store = configureStore({
    reducer: preparePersistRootReducer(createReducer()),
    middleware: [
      ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: false,
      }),
      ...middlewares,
    ],
    devTools: isDevelopMode,
    enhancers,
  })

  const persistor = persistStore(store)
  //@ts-ignore
  window.persistor = persistor

  return { store, persistor }
}
