import React, { Component } from 'react'
import ABookOfSigns from '../ABookOfSigns'
import ConversationsWithRudy from '../ConversationsWithRudy'
import Typings from '../Typings'
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
              {/* https://i.imgur.com/6GmOutE.jpg */}

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
                <Link className='rudy-conversations-link-2' to='/typings'>
                  <p className='available-titles-rudy-name'>Typings by Christopher Knowles</p>
                </Link>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <div className='rudy-conversations-link-2'>
                      <img src='https://i.imgur.com/pXNQi67.jpg' className='typings-img' alt='' />
                      <img src='https://i.imgur.com/7eKAd9N.jpg' className='typings-2-img' alt='' />
                    </div>
                    <p className='rudy-photos-description1'>Christopher Knowles</p>
                    <p className='rudy-photos-description2'>Photo by Richard Landry</p>
                    <div className='convos-with-rudy-main-container'>
                      <br />
                      <p className='rudy-text'>Hardcover edition: red cloth over boards with green foil stamp</p>
                      <br />
                      <p className='rudy-text'>Softcover: $300 per copy</p>
                      <p className='rudy-text'>Hardcover: $500 per copy</p>
                      <div className='buy-now-div2'>
                        <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta' id='buy-now-rudy-link'>
                          <span className='buy-now-rudy-text'>Buy Now</span>
                          <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
                            <path d='M1,5 L11,5' />
                            <polyline points='8 1 12 5 8 9' />
                          </svg>
                        </a>
                      </div>
                      <Route path='/typings' component={Typings} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='available-titles-info-div-rudy'>
                <p className='available-titles-rudy-name'>Train Ride by Ted Berrigan</p>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <div className='rudy-conversations-link-2'>
                      <img src='https://i.imgur.com/sCQoBgB.jpg' className='train-ride-available-img' alt='' />
                    </div>
                    <p className='rudy-photos-description1'>Cover by Joe Brainard</p>
                    <div className='convos-with-rudy-main-container'>
                      <br />
                      <p className='rudy-text'>Back in print</p>
                      <p className='rudy-text'>Order yours today</p>
                      <p className='rudy-text'>$12 per copy softcover</p>
                    </div>
                  </div>
                  <div className='buy-now-div2'>
                    <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta' id='buy-now-rudy-link'>
                      <span className='buy-now-rudy-text'>Buy Now</span>
                      <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
                        <path d='M1,5 L11,5' />
                        <polyline points='8 1 12 5 8 9' />
                      </svg>
                    </a>
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

// https://i.imgur.com/hXoWiSw.jpg
