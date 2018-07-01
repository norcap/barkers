import React, { Component } from 'react'
import { connect } from 'react-redux'

import ChatMessage from './ChatMessage'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'

import '../css/Main.css'

import { getChatHistory, clearChatHistory } from '../../Actions/Actions'

export class Chat extends Component {
  componentDidMount = () => {
    this.props.getChatHistory(this.props.match.params.chatid)
  }

  componentDidUpdate = () => {
    const div = document.querySelector('.main')
    div.scrollTop = div.scrollHeight
  }

  componentWillUnmount = () => {
    this.props.clearChatHistory()
  }

  render() {
    let chatMessages
    if (this.props.chatHistory) {
      chatMessages = this.props.chatHistory
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(
          singleMessage =>
            singleMessage.message ? (
              <ChatMessage
                key={singleMessage.messageid}
                message={singleMessage}
              />
            ) : null
        )
    }
    return (
      <div className="container">
        <ChatHeader className="header" />
        <div className="main">{chatMessages}</div>
        <ChatFooter className="footer" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chatHistory: state.chatHistory
})

export default connect(
  mapStateToProps,
  { getChatHistory, clearChatHistory }
)(Chat)
