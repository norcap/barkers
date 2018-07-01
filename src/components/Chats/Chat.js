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

  componentWillUnmount = () => {
    this.props.clearChatHistory()
  }

  render() {
    let chatMessages
    if (this.props.chatHistory) {
      chatMessages = this.props.chatHistory.map(
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
        <ChatFooter className="footer" onClick={this.props.onClick} />
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
