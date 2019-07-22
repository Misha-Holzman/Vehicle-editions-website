import React, { Component } from 'react'
import './style.css'

class MusicAndArt extends Component {
  render () {
    return (
      <div className='poem-readings-main-container'>
        <div className='poem-readings-title-div'>
          <h1 className='music-art-main-title'>Music And Art</h1>
        </div>
        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'><span id='links-pages-style'>Music</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'><span id='links-pages-style'>Art Work</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'><span id='links-pages-style'>Art Exhibits</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='poem-readings-title-div'>
          <img src='https://i.imgur.com/vD8PES6.png' className='car-photo-music-art' />
        </div> */}
      </div>
    )
  }
}

export default MusicAndArt
