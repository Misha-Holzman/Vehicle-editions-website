import React, { Component } from 'react'
import './style.css'

class Writing extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='books-title-div'>
          <h1 className='books-main-title'>Writing</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-books' />
        </div>
        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Books</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Magazines</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Anthologies</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Poems</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Poem Readings</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Writing Samples</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Other Publications</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Writing
