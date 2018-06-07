import React, { Component } from 'react'
import './css/CallOutMessage.css'

export default class CallOut extends Component {
  deleteCallOut(id) {
    this.props.onDelete(id)
  }
  render() {
    const { category, message } = this.props.callOut
    return (
      <div
        className="callOutMessage"
        onClick={this.deleteCallOut.bind(this, this.props.callOut.id)}
      >
        <span>Category: {category}</span>
        <br />
        <span>{message}</span>
      </div>
    )
  }
}
