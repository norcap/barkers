import React, { Component } from 'react'

import Footer from '../Footer'
import Header from '../Header'

import '../css/Main.css'

export default class ChatList extends Component {
  render() {
    return (
      <div className="container">
        <Header className="header" />
        <div className="main">List of all of User's Chats</div>
        <Footer className="footer" />
      </div>
    )
  }
}
