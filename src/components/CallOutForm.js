import React, { Component } from 'react'
import uid from 'uid'

export default class CallOutForm extends Component {
  // Defnine all possible categories - those are fixed, Users are not allowed to create their own categories
  static defaultProps = {
    categories: ['news', 'sport', 'today', 'life']
  }

  //Save data from Form and send it to App.js
  handleSubmit(e) {
    e.preventDefault()
    if (this.refs.message.value === '') {
      alert('Please fill in a message before posting it')
    } else {
      let newCallOut = {
        id: uid(10),
        message: this.refs.message.value,
        category: this.refs.category.value
      }

      this.props.addCallOut(newCallOut)
    }
  }

  render() {
    //Get all categories for Select Menu
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      )
    })
    return (
      <div>
        <h4>Add a Call out</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Message:</label>
            <input
              type="text"
              placeholder="Type your Call Out here"
              ref="message"
            />
          </div>
          <div>
            <label>Category:</label>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
