import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import ChatListView from './containers/ChatListView'
import ChatView from './containers/ChatView'

import './App.css'

class App extends Component {
  /*
  addCallOut = callout => {
    let callOuts = this.state.callOuts
    this.setState({ callOuts: [...callOuts, callout] })
  }

  deleteCallOut = id => {
    let callOuts = this.state.callOuts
    let index = callOuts.findIndex(x => x.id === id)
    callOuts.splice(index, 1)
    this.setState({ callOuts: callOuts })
  }

  addToHistory = newChatMessage => {
    let newChatHistory = this.state.chatHistory
    this.setState({
      chatHistory: [...newChatHistory, newChatMessage]
    })
  }*/

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ChatListView} />
          <Route path="/chat" component={ChatView} />
        </div>
      </Router>
    )
  }
}

export default App
