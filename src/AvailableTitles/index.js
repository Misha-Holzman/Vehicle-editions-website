import React, { Component } from 'react'
import ABookOfSigns from '../ABookOfSigns'
import ConversationsWithRudy from '../ConversationsWithRudy'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'

class AvailableTitles extends Component {
  render () {
    return (
      <Router>
        <div className='available-titles-main-container'>
          <div className='available-titles-title-div'>
            <h1 className='available-titles-main-title'>Available Titles</h1>
            <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-available' />
          </div>
          <div className='available-titles-info-container'>
            <div className='available-titles-container'>
              <div className='available-titles-info-div-signs'>
                <Link className='book-of-signs-link' to='/bookOfSigns'>
                  <p className='available-titles-signs-name'>A Book of Signs</p>
                </Link>
                <div className='signs-dynamic-div'>
                  <Link className='book-of-signs-link' to='/bookOfSigns'>
                    <img src='https://i.imgur.com/T0mI8W7.jpg' className='book-of-signs-img' />
                  </Link>
                  <Route path='/bookOfSigns' component={ABookOfSigns} />
                </div>
              </div>

              {/* SEPERATE THE PHOTO OF RUDY FROM THE BOOK COVER AND PUT THE PHOTO FARTHER DOWN THE PAGE */}
              <div className='available-titles-info-div-rudy'>
                <Link className='rudy-conversations-link' to='/conversationsWithRudy'>
                  <p className='available-titles-rudy-name'>Conversations with Rudy Burckhardt About Everything</p>
                </Link>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <Link className='rudy-conversations-link' to='/conversationsWithRudy'>
                      <img src='https://i.imgur.com/5j5i2ay.jpg' className='convo-with-rudy-img' />
                      <img src='https://i.imgur.com/q1cg4L3.jpg' className='convo-with-rudy-2-img' />
                    </Link>
                    <p className='rudy-photos-description1'>Rudy Burckhadt</p>
                    <p className='rudy-photos-description2'>Photo Credit – Timothy Greenfield-Sanders</p>
                    <Route path='/conversationsWithRudy' component={ConversationsWithRudy} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default AvailableTitles
