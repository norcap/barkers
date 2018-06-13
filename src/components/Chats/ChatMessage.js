import React, { Component } from 'react'
import '../css/ChatMessage.css'

export default class ChatMessage extends Component {
  render() {
    return (
      <div className="chatMessage">
        <span>{this.props.message}</span>
        <br />
        <span>{this.props.date}</span>
      </div>
    )
  }
}
