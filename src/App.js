import React, { Component } from 'react'
import uid from 'uid'

import CallOutForm from './components/CallOutForm'
import CallOutList from './components/CallOutList'

import './App.css'

class App extends Component {
  state = {
    callOuts: [
      {
        id: uid(10),
        message:
          'This is a test message with no real content. To delete a message just click on the message.',
        category: 'introduction'
      }
    ]
  }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">Barkers Messenger App</header>
        <h4>My Call Outs</h4>
        <CallOutList
          callOuts={this.state.callOuts}
          onDelete={this.deleteCallOut}
        />
        <CallOutForm addCallOut={this.addCallOut} />
      </div>
    )
  }
}

export default App
