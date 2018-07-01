import React, { Component } from 'react'
import { connect } from 'react-redux'
import uid from 'uid'
import Header from './Header'
import Footer from './Footer'
import { createUser } from '../Actions/Actions'

import './css/Main.css'

export class CreateUser extends Component {
  handleSubmit = e => {
    e.preventDefault()
    if (this.refs.username.value === '') {
      alert('Please fill in a user name')
    } else {
      let newUser = {
        userid: 'not defined',
        username: this.refs.username.value,
        chatlist: [
          {
            chatid: '9012',
            userid: '3',
            latestmessage:
              'This is the last message send to chat with ID 9012...',
            date: '10.12.2017',
            time: '9:45',
            read: false
          }
        ]
      }
      this.props.createUser(newUser)
    }
  }
  render() {
    return (
      <div className="container">
        <Header className="header" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Your User Name" ref="username" />
          </div>
          <input type="submit" value="send" />
        </form>

        <Footer className="footer" />
      </div>
    )
  }
}

export default connect(
  null,
  { createUser }
)(CreateUser)
