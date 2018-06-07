import React, { Component } from 'react'
import './css/CallOutMessage.css'

export default class CallOut extends Component {
  deleteCallOut(id) {
    this.props.onDelete(id)
  }
  render() {
    return (
      <div
        className="callOutMessage"
        onClick={this.deleteCallOut.bind(this, this.props.callOut.id)}
      >
        <span>Category: {this.props.callOut.category}</span>
        <br />
        <span>{this.props.callOut.message}</span>
      </div>
    )
  }
}
