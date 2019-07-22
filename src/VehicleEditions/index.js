import React, { Component } from 'react'
import './style.css'

class VehicleEditions extends Component {
  render () {
    return (

      <div className='grants-and-awards-main-container'>
        <div className='grants-and-awards-title-div'>
          <h1 className='veh-ed-main-title'>Vehicle Editions</h1>
        </div>

        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='/GrantsAndAwards' className='veh-ed-nav-link'><span id='links-pages-style'>Grants and Awards</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='/Exhibitions' className='veh-ed-nav-link'><span id='links-pages-style'>Exhibitions</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='/AvailableTitles' className='veh-ed-nav-link'><span id='links-pages-style'>Available Titles</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='/OutOfPrintTitles' className='veh-ed-nav-link'><span id='links-pages-style'>Out of Print Titles</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grants-and-awards-title-div'>
          <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-1' />
        </div>
      </div>
    )
  }
}

export default VehicleEditions
