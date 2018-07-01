import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'

import Login from './components/Login'
import ChatList from './components/Chats/ChatList'
import CallOutForm from './components/CallOuts/CallOutForm'
import CallOutList from './components/CallOuts/CallOutList'
import CreateUser from './components/CreateUser'
import Chat from './components/Chats/Chat'
import Friends from './components/Friends'
import Settings from './components/Settings'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/callout" component={CallOutForm} />
          <Route path="/calloutlist" component={CallOutList} />
          <Route path="/chatList" component={ChatList} />
          <Route path="/chat/:chatid" component={Chat} />
          <Route path="/friends" component={Friends} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    )
  }
}

export default App
