import React, { Component } from 'react'
import './style.css'

class HomePage extends Component {
  render () {
    return (
      <div className='main-page-container'>
        <img className='homepage-img' src='https://i.imgur.com/U2obmgg.jpg' />
        <div className='arrow-div'>
          <a href='#bottom-of-homepage-arrow-link' id='link'>
            <img
              src='https://i.imgur.com/T5f8v9i.png'
              height='30px'
              className='arrow'
            />
          </a>
        </div>
        <div className='bottom-homepage-container' id='bottom-of-homepage-arrow-link'>
          <p>some stuff goes here</p>
        </div>
      </div>
    )
  }
}

export default HomePage
