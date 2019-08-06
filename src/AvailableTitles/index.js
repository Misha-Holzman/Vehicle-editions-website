import React, { Component } from 'react'
import ABookOfSigns from '../ABookOfSigns'
import ConversationsWithRudy from '../ConversationsWithRudy'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style.css'

class AvailableTitles extends Component {
  render () {
    return (
      <Router>
        <div className='available-titles-main-container'>
          <div className='available-titles-title-div'>
            <h1 className='available-titles-main-title'>Available Titles</h1>
            <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-available' alt='' />
          </div>
          <div className='available-titles-info-container'>
            <div className='available-titles-container'>
              <div className='available-titles-info-div-signs'>
                <Link className='book-of-signs-link' to='/bookOfSigns'>
                  <p className='available-titles-signs-name'>A Book of Signs</p>
                </Link>
                <div className='signs-dynamic-div'>
                  <Link className='book-of-signs-link' to='/bookOfSigns'>
                    <img src='https://i.imgur.com/T0mI8W7.jpg' className='book-of-signs-img' alt='' />
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
                    <Link className='rudy-conversations-link-2' to='/conversationsWithRudy'>
                      <img src='https://i.imgur.com/5j5i2ay.jpg' className='convo-with-rudy-img' alt='' />
                      <img src='https://i.imgur.com/q1cg4L3.jpg' className='convo-with-rudy-2-img' alt='' />
                    </Link>
                    <p className='rudy-photos-description1'>Rudy Burckhadt</p>
                    <p className='rudy-photos-description2'>Photo by Timothy Greenfield-Sanders</p>
                    <Route path='/conversationsWithRudy' component={ConversationsWithRudy} />
                  </div>
                </div>
              </div>
              <div className='available-titles-info-div-rudy'>
                <p className='available-titles-rudy-name'>Typings by Christopher Knowles</p>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <div className='rudy-conversations-link-2'>
                      <img src='https://i.imgur.com/pXNQi67.jpg' className='convo-with-rudy-img' alt='' />
                      <img src='https://i.imgur.com/7eKAd9N.jpg' className='convo-with-rudy-2-img' alt='' />
                    </div>
                    <p className='rudy-photos-description1'>Christopher Knowles</p>
                    <p className='rudy-photos-description2'>Photo by Richard Landry</p>
                    <div className='convos-with-rudy-main-container'>
                      <br />
                      <p className='rudy-text'>Hardcover edition: red cloth over boards with green foil stamp</p>
                      <br />
                      <p className='rudy-text'>$300 per copy</p>
                      <br />
                      <p className='rudy-text-body-1'>Available for purchase from <a href='FIX' className='ilylali-link' target='_blank'>movingvehicle@gmail.com</a></p>
                    </div>
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
