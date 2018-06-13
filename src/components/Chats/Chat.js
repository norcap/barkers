import React, { Component } from 'react'

import ChatMessage from './ChatMessage'
import ChatInputField from './ChatInputField'

export default class Chat extends Component {
  addToChatHistory = newChatMessage => {
    this.props.addToHistory(newChatMessage)
  }

  render() {
    let chatMessages
    if (this.props.chatHistory) {
      chatMessages = this.props.chatHistory.map(singleMessage => (
        <ChatMessage
          key={singleMessage.id}
          message={singleMessage.message}
          date={singleMessage.date}
        />
      ))
    }
    return (
      <div>
        <div>{chatMessages}</div>
        <ChatInputField addToChatHistory={this.addToChatHistory} />
      </div>
    )
  }
}
