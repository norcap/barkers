import React, { Component } from 'react'
import { css } from 'emotion'

const headerStyle = css`
  display: flex;
  justify-content: space-evenly;
  background-color: #878787;
`

export default class HeaderTopics extends Component {
  render() {
    return (
      <div className={headerStyle}>
        <div>
          <h3>Barkers Messenger</h3>
        </div>
        <div>
          <button>Logout</button>
        </div>
      </div>
    )
  }
}
