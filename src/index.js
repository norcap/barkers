import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/RootReducer'
import Reducers from './Reducers/Reducers'
import initialState from './Reducers/initialState'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(Reducers, initialState, enhancer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
