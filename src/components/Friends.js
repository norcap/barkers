import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

import HeadlineIcon from '../HeadlineIcons/BarkerVisualFriends.png'
import './css/Main.css'

export default class Friends extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="headline">
          <div className="headlineText">Your Friends</div>
          <div>
            <img src={HeadlineIcon} alt="" />
          </div>
        </div>
        <div className="main">Friends List</div>
        <Footer />
      </div>
    )
  }
}
