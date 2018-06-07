import React, { Component } from 'react'

import CallOut from './CallOut'

export default class CallOutList extends Component {
  render() {
    let callOutMessages
    if (this.props.callOuts) {
      callOutMessages = this.props.callOuts.map(callOut => {
        return (
          <CallOut
            key={callOut.id}
            callOut={callOut}
            onDelete={this.props.onDelete}
          />
        )
      })
    }
    return <div>{callOutMessages}</div>
  }
}
