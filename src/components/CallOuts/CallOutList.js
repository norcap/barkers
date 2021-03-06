import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import uid from 'uid'
import history from '../../history'
import Header from '../Header'
import Footer from '../Footer'
import {
  getCallouts,
  addToChatHistory,
  addChatidToUserdata,
  createNewChat,
  removeCallout
} from '../../Actions/Actions'

import HeadlineIcon from '../../HeadlineIcons/BarkerVisualTopics.png'

import '../css/Main.css'

export class CallOutList extends Component {
  componentDidMount() {
    this.props.getCallouts()
  }

  createNewChat = callout => {
    if (callout.userid === this.props.userdata.userid) {
    } else {
      let users = [this.props.userdata.userid, callout.userid]
      let calloutid = callout.calloutid
      let messageid = uid(10)

      createNewChat(calloutid, users)
      addToChatHistory(calloutid, messageid, callout)
      addChatidToUserdata(callout.userid, calloutid)
      addChatidToUserdata(this.props.userdata.userid, calloutid)
      removeCallout(calloutid)

      history.push('/chat/' + calloutid)
    }
  }

  renderCallOutList() {
    return this.props.callouts
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(callout => (
        <div
          className="calloutStyle"
          key={callout.calloutid}
          onClick={() => this.createNewChat(callout)}
        >
          <div className="messageTop">
            <strong>{callout.category}</strong>
          </div>
          <br />
          <div>{callout.message}</div>
          <div className="time">{moment(callout.timestamp).format('LT')}</div>
        </div>
      ))
  }

  render() {
    return (
      <div className="container">
        <Header className="header" />
        <div className="headline">
          <div className="headlineText">Pick a Topic</div>
          <div>
            <img src={HeadlineIcon} alt="" />
          </div>
        </div>
        <div className="main">{this.renderCallOutList()}</div>
        <Footer className="footer" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  callouts: state.callouts,
  userdata: state.userdata
})

export default connect(
  mapStateToProps,
  { getCallouts }
)(CallOutList)
