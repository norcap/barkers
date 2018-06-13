import React, { Component } from 'react'
import uid from 'uid'
import moment from 'moment'

export default class ChatInputField extends Component {
  handleSubmit = e => {
    e.preventDefault()
    if (this.refs.message.value === '') {
      alert('Please fill in a message before posting it')
    } else {
      let newChatMessage = {
        id: uid(10),
        message: this.refs.message.value,
        timestamp: Date.now(),
        date: moment().format('LT')
      }

      this.props.addToChatHistory(newChatMessage)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="type message..." ref="message" />
          </div>
          <input type="submit" value="send" />
        </form>
      </div>
    )
  }
}
