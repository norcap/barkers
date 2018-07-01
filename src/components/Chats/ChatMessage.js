import React, { Component } from 'react'
import '../css/Main.css'

export default class ChatMessage extends Component {
  render() {
    return (
      <div className="messageStyle">
        <div>
          {this.props.message.userid}: {this.props.message.message}
        </div>
        <div className="time">{this.props.message.time}</div>
      </div>
    )
  }
}
