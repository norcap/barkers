import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import { deleteChat } from '../../Actions/Actions'
import BarkersLogo from '../../BarkerIcons/Barkers_Logo.svg'

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid #ccc;
`

const iconStyleHeader = css`
  width: 40px;
`

export default class ChatHeader extends Component {
  deleteChat = chatid => {
    deleteChat(chatid)
  }

  render() {
    return (
      <div className={headerStyle}>
        <div className={iconStyleHeader}>
          <Link to="/chatList">Back</Link>
        </div>

        <div>
          <img src={BarkersLogo} alt="" />
        </div>

        <div className={iconStyleHeader} />
      </div>
    )
  }
}
