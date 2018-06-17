import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ChatList from './components/Chats/ChatList'
import CallOutForm from './components/CallOuts/CallOutForm'
import CallOutList from './components/CallOuts/CallOutList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ChatList} />
          <Route path="/callout" component={CallOutForm} />
          <Route path="/calloutlist" component={CallOutList} />
        </div>
      </Router>
    )
  }
}

export default App
