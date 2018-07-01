import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import { getUserData } from '../../Actions/Actions'

import HeadlineIcon from '../../HeadlineIcons/BarkerVisualChats.png'

import '../css/Main.css'

export class ChatList extends Component {
  renderChatList() {
    if (this.props.chatlist) {
      return this.props.chatlist.map(chat => (
        <div key={chat.chatid} className="messageStyle">
          <Link to={`/chat/${chat.chatid}`}>
            <strong>from: {chat.userid}</strong>
            <div>{chat.latestmessage}Placeholder 'Latest Text'</div>
            <div className="time">Placeholder 'Time'</div>
          </Link>
        </div>
      ))
    }
  }

  render() {
    return (
      <div className="container">
        <Header className="header" />
        <div className="headline">
          <div className="headlineText">
            Current Chats &<br /> Discussions
          </div>
          <div>
            <img src={HeadlineIcon} alt="" />
          </div>
        </div>
        <div className="main">{this.renderChatList()}</div>
        <Footer className="footer" />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  chatlist: state.chatlist
})

export default connect(
  mapStateToProps,
  { getUserData }
)(ChatList)
