import React, { Component } from 'react'
import { css } from 'emotion'

const buttonStyle = css`
  width: 100%;
  height: 100%;
  min-height: 30px;
  max-height: 100px;
  background-color: darkblue;
  border: 2px solid grey;
  margin: 0px;
  color: white;
  font-size: 120%;
`

export default class Button extends Component {
  render() {
    return <button className={buttonStyle} />
  }
}
