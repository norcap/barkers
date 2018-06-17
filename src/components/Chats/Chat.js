import React, { Component } from 'react'

import ChatMessage from './ChatMessage'
import FooterChat from './ChatFooter'
import ChatHeader from './ChatHeader'

export default class Chat extends Component {
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
        <ChatHeader />
        <div>{chatMessages}</div>
        <FooterChat onClick={this.props.onClick} />
      </div>
    )
  }
}
