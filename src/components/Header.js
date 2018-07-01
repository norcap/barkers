import React, { Component } from 'react'
import { css } from 'emotion'

import ProfileIcon from '../BarkerIcons/ProfileIcon.svg'
import BarkersLogo from '../BarkerIcons/Barkers_Logo.svg'

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

export default class HeaderTopics extends Component {
  render() {
    return (
      <div className={headerStyle}>
        <div className={iconStyleHeader} />
        <div>
          <img src={BarkersLogo} alt="" />
        </div>
        <div className={iconStyleHeader}>
          <img src={ProfileIcon} alt="" />
        </div>
      </div>
    )
  }
}
