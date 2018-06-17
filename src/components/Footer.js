import React, { Component } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

const footerStyle = css`
  display: flex;
  justify-content: space-evenly;
  background-color: #878787;
`

export default class Footer extends Component {
  render() {
    return (
      <div className={footerStyle}>
        <Link to="/">Friends</Link>
        <Link to="/calloutlist">Topics</Link>
        <Link to="/">Chats</Link>
        <Link to="/callout">Callout</Link>
        <Link to="/">Setting</Link>
      </div>
    )
  }
}
