import React, { Component } from 'react'

import Footer from '../Footer'
import Header from '../Header'

export default class ChatList extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>List of all of User's Chats</div>
        <Footer />
      </div>
    )
  }
}
