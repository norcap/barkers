import React, { Component } from 'react'
import '../css/Main.css'

export default class ChatMessage extends Component {
  render() {
    return (
      <div className="messageStyle">
        <div>
          {this.props.message.userid}: {this.props.message.message}
        </div>
        {Date.now() - this.props.message.timestamp <= 86400000 ? (
          <div className="time">{this.props.message.time}</div>
        ) : (
          <div className="time">{this.props.message.date}</div>
        )}
      </div>
    )
  }
}
