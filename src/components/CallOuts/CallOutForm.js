import React, { Component } from 'react'
import uid from 'uid'

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
      let newCallOut = {
        id: uid(10),
        message: this.refs.message.value,
        category: this.refs.category.value
      }

      this.props.onAddCallOut(newCallOut)
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => (
      <option key={category.text} value={category.value}>
        {category.value}
      </option>
    ))
    return (
      <div>
        <h4>Add a Call out</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              type="text"
              placeholder="Type your Call Out here"
              ref="message"
            />
          </div>
          <div>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="send" />
        </form>
      </div>
    )
  }
}
