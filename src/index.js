import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducer from './Reducers/reducer'
import initialState from './Reducers/initialState'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

//const firebase = require('../node_modules/firebase')

const config = {
  apiKey: 'AIzaSyCu2SjX2X8tZgwXyYEdQOjy8VKGCFQM5N8',
  authDomain: 'mag-messenger.firebaseapp.com',
  databaseURL: 'https://mag-messenger.firebaseio.com',
  projectId: 'mag-messenger',
  storageBucket: '',
  messagingSenderId: '303315501474'
}

firebase.initializeApp(config)

const database = firebase.database()

function createNewUser(userId, name, email, password) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    password: password
  })
}

createNewUser(45, 'John', 'Email', 'Password')

let users = database
  .ref('users/45')
  .once('value')
  .then(user => {
    user.forEach(item => {
      console.log(item.val())
    })
  })

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
