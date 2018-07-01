import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserData, getUserChatlist } from '../Actions/Actions'

import history from '../history'
import './css/Main.css'

export class Login extends Component {
  static defaultProps = { users: [1, 2, 3] }

  handleSubmit = e => {
    e.preventDefault()

    this.props.getUserData(this.refs.user.value)
    this.props.getUserChatlist(this.refs.user.value)
    history.push('/chatList')
  }
  render() {
    let userOptions = this.props.users.map(user => (
      <option key={user} value={user}>
        {user}
      </option>
    ))
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="main">
          <div>
            <select ref="user">{userOptions}</select>
          </div>

          <input type="submit" value="okay" />
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { getUserData, getUserChatlist }
)(Login)
