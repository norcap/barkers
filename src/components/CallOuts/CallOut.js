import React, { Component } from 'react'
import '../css/CallOutMessage.css'

export default class CallOut extends Component {
  deleteCallOut = () => {
    this.props.onDelete(this.props.callOut.id)
  }
  render() {
    const { category, message } = this.props.callOut
    return (
      <div className="callOutMessage" onClick={this.deleteCallOut}>
        <span>Category: {category}</span>
        <br />
        <span>{message}</span>
      </div>
    )
  }
}
