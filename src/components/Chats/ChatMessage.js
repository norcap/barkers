import React, { Component } from 'react'
import moment from 'moment'
import '../css/Main.css'

export default class ChatMessage extends Component {
  render() {
    return (
      <div className="messageStyle">
        <div>
          {this.props.message.userid}: {this.props.message.message}
        </div>
        {Date.now() - this.props.message.timestamp <= 86400000 ? (
          <div className="time">
            {moment(this.props.message.timestamp).format('LT')}
          </div>
        ) : (
          <div className="time">
            {moment(this.props.message.timestamp).format('ll')}
          </div>
        )}
      </div>
    )
  }
}
