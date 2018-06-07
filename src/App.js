import React, { Component } from 'react'
import uid from 'uid'
// Import components
import CallOutForm from './components/CallOutForm'
import CallOutList from './components/CallOutList'

//Import CSS
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      callOuts: [
        {
          id: uid(10),
          message:
            'This is a test message with no real content. To delete a message just click on the message.',
          category: 'introduction'
        }
      ]
    }
  }
  //Add Call out from CallOutForm to List (into state)
  addCallOut(callout) {
    let callOuts = this.state.callOuts
    callOuts.push(callout)
    this.setState({ callOuts: callOuts })
  }

  deleteCallOut(id) {
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
          onDelete={this.deleteCallOut.bind(this)}
        />
        <CallOutForm addCallOut={this.addCallOut.bind(this)} />
      </div>
    )
  }
}

export default App
