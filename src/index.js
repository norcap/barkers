import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Reducers/reducer'
import initialState from './Reducers/initialState'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { receiveChatMessage } from './service'

receiveChatMessage(7233456)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
