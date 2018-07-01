import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

import './css/Main.css'

export default class Settings extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">Setting</div>
        <Footer />
      </div>
    )
  }
}
