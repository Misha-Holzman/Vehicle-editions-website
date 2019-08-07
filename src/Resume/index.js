import React, { Component } from 'react'
import './style.css'

class Resume extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='grants-and-awards-title-div'>
          <h1 className='resume-main-title'>Resume</h1>
          <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-resume' alt='' />
        </div>
        <div className='resume-container'>
          <div className='resume-page-1-container'>
            <img src='https://i.imgur.com/NTPbdDj.jpg' className='resume-img' alt='' />
          </div>
          <div className='resume-page-2-container'>
            <img src='https://i.imgur.com/0bXfiIz.jpg' className='resume-img' alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
