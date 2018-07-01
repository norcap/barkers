import React, { Component } from 'react'
import { connect } from 'react-redux'
import uid from 'uid'
import moment from 'moment'

import { addToChatHistory } from '../../Actions/Actions'

export class ChatFooter extends Component {
  handleSubmit = e => {
    e.preventDefault()
    if (this.refs.message.value === '') {
      alert('Please fill in a message before posting it')
    } else {
      let messageid = uid(10)
      let newChatMessage = {
        messageid: messageid,
        userid: this.props.userdata.userid,
        message: this.refs.message.value,
        timestamp: Date.now(),
        time: moment().format('LT'),
        date: moment().format('ll')
      }
      addToChatHistory(this.props.chatid, messageid, newChatMessage)
      document.querySelector('.chatInput').value = ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="chatInput"
            type="text"
            placeholder="type a message..."
            ref="message"
          />

          <input className="chatSend" type="submit" value="send" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chatid: state.chatid,
  userdata: state.userdata
})

export default connect(mapStateToProps)(ChatFooter)
