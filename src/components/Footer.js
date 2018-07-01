import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

import NavBarIconCallOuts from '../BarkerIcons/NavBarIconCallOuts.svg'
import NavBarIconChats from '../BarkerIcons/NavBarIconChats.svg'
import NavBarIconFriends from '../BarkerIcons/NavBarIconFriends.svg'
import NavBarIconSettings from '../BarkerIcons/NavBarIconSettings.svg'
import NavBarIconTopics from '../BarkerIcons/NavBarIconTopics.svg'

import './css/Main.css'

const footerStyle = css`
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
  background-color: white;
  border-top: 1px solid #ccc;
`

const iconStyleFooter = css`
  height: 20px;
`

export default class Footer extends Component {
  render() {
    return (
      <div className={footerStyle}>
        <Link to="/friends">
          <div className={iconStyleFooter}>
            <img src={NavBarIconFriends} alt="" />
          </div>
          <div>Friends</div>
        </Link>

        <Link to="/calloutlist">
          <div className={iconStyleFooter}>
            <img src={NavBarIconTopics} alt="" />
          </div>
          <div>Topics</div>
        </Link>

        <Link to="/ChatList">
          <div className={iconStyleFooter}>
            <img src={NavBarIconChats} alt="" />
          </div>
          <div>Chats</div>
        </Link>

        <Link to="/callout">
          <div className={iconStyleFooter}>
            <img src={NavBarIconCallOuts} alt="" />
          </div>
          <div>Callout</div>
        </Link>
        <Link to="/settings">
          <div className={iconStyleFooter}>
            <img src={NavBarIconSettings} alt="" />
          </div>
          <div>Settings</div>
        </Link>
      </div>
    )
  }
}
