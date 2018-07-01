import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

import HeadlineIcon from '../HeadlineIcons/BarkerVisualSettings.png'
import './css/Main.css'

export default class Settings extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="headline">
          <div className="headlineText">Settings</div>
          <div>
            <img src={HeadlineIcon} alt="" />
          </div>
        </div>
        <div className="main">Setting</div>
        <Footer />
      </div>
    )
  }
}
