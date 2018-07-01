import React, { Component } from 'react'
import { connect } from 'react-redux'
import uid from 'uid'
import moment from 'moment'
import Header from '../Header'
import Footer from '../Footer'
import { sendCallout } from '../../Actions/Actions'

import history from '../../history'

import HeadlineIcon from '../../HeadlineIcons/BarkerVisualTopics.png'
import '../css/Main.css'

export class CallOutForm extends Component {
  static defaultProps = {
    categories: [
      { text: 'selectTopic', value: 'select topic' },
      { text: 'news', value: 'News' },
      { text: 'sport', value: 'Sport' },
      { text: 'politics', value: 'Politics' },
      { text: 'life', value: 'Life' }
    ]
  }
  handleSubmit = e => {
    e.preventDefault()
    if (
      this.refs.message.value === '' ||
      this.refs.category.value === 'select topic'
    ) {
      alert('Please fill in a message and select a topic before posting it')
    } else {
      let calloutid = uid(10)
      let newCallout = {
        calloutid: calloutid,
        category: this.refs.category.value,
        userid: this.props.userdata.userid,
        message: this.refs.message.value,
        timestamp: Date.now(),
        time: moment().format('LT'),
        date: moment().format('ll')
      }
      sendCallout(calloutid, newCallout)
      history.push('/calloutlist')
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => (
      <option key={category.text} value={category.value}>
        {category.value}
      </option>
    ))
    return (
      <div className="container">
        <Header className="header" />
        <div className="headline">
          <div className="headlineText">
            Add a new<br />Callout
          </div>
          <div>
            <img src={HeadlineIcon} alt="" />
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="main">
          <div className="calloutTextareaBox">
            <textarea
              className="calloutTextarea"
              type="text"
              placeholder="Type your Call Out here"
              ref="message"
            />
          </div>
          <div>
            <select className="calloutSelect" ref="category">
              {categoryOptions}
            </select>
          </div>

          <input className="calloutSend" type="submit" value="send" />
        </form>
        <Footer className="footer" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userdata: state.userdata
})

export default connect(
  mapStateToProps,
  {}
)(CallOutForm)
