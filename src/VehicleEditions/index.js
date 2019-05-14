import React, { Component } from 'react'
import './style.css'

class VehicleEditions extends Component {
  render () {
    return (

      <div className='grants-and-awards-main-container'>
        <div className='grants-and-awards-title-div'>
          <h1 className='grants-awards-main-title'>Vehicle Editions</h1>
          <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions' />
        </div>

        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Grants and Awards</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Exhibitions</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Available Titles</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Out of Print Titles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VehicleEditions
