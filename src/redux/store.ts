import { applyMiddleware, createStore } from 'redux'
import { Store } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer, RootState } from './root.reducer'


export const initStore = (initialState, isServer): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState>(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  }
  if (!window.store) {
    window.store = createStore<RootState>(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
  }
  return window.store
}
