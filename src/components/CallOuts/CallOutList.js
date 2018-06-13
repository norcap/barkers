import React, { Component } from 'react'

import CallOut from './CallOut'

export default class CallOutList extends Component {
  render() {
    const { callOuts, onDelete } = this.props
    let callOutMessages
    if (callOuts) {
      callOutMessages = callOuts.map(callOut => (
        <CallOut key={callOut.id} callOut={callOut} onDelete={onDelete} />
      ))
    }
    return <div>{callOutMessages}</div>
  }
}
