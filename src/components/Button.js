import React, { Component } from 'react'
import { css } from 'emotion'

const buttonStyle = css`
  width: 100px;
  height: 30px;
  background-color: darkblue;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 10px;
  color: white;
`

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.buttonStyle} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
