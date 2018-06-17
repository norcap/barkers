import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import { getCallouts } from '../../Actions/CalloutActions'

import '../css/Main.css'

export class CallOutList extends Component {
  componentDidMount() {
    this.props.getCallouts()
  }

  renderCallOutList() {
    return this.props.callouts.map(callout => (
      <div className="calloutStyle" key={callout.calloutID}>
        <strong>{callout.category}</strong>
        <br />
        <span>{callout.message}</span>
      </div>
    ))
  }

  render() {
    return (
      <div className="container">
        <Header className="header" />
        <div className="main">{this.renderCallOutList()}</div>
        <Footer className="footer" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  callouts: state.callouts
})

export default connect(
  mapStateToProps,
  { getCallouts }
)(CallOutList)
