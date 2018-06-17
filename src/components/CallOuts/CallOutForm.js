import React, { Component } from 'react'
import { connect } from 'react-redux'
import uid from 'uid'
import moment from 'moment'
import Header from '../Header'
import Footer from '../Footer'
import { sendCallout } from '../../Actions/CalloutActions'

import '../css/Main.css'

export default class CallOutForm extends Component {
  static defaultProps = {
    categories: [
      { text: 'news', value: 'News' },
      { text: 'sport', value: 'Sport' },
      { text: 'politics', value: 'Politics' },
      { text: 'life', value: 'Life' }
    ]
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.refs.message.value === '') {
      alert('Please fill in a message before posting it')
    } else {
      sendCallout(
        uid(10),
        this.refs.category.value,
        this.refs.username.value,
        this.refs.message.value
      )
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
        <form onSubmit={this.handleSubmit} className="main">
          <div>
            <textarea
              type="text"
              placeholder="Type your Call Out here"
              ref="message"
            />
          </div>
          <div>
            <input type="text" placeholder="Your Name" ref="username" />
          </div>
          <div>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="send" />
        </form>
        <Footer className="footer" />
      </div>
    )
  }
}
