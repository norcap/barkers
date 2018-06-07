import React, { Component } from 'react'
import './css/CallOutMessage.css'

export default class CallOut extends Component {
  render() {
    return (
      <div className="callOutMessage">
        <p>Category: {this.props.callOut.category}</p>
        <p>{this.props.callOut.message}</p>
      </div>
    )
  }
}
