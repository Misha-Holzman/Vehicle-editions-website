import React, { Component } from 'react'
import './style.css'

class ProfessionalServices extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='clients-main-title'>Professional Services</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' />
        </div>
        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Clients</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Editorial / Production Services</a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='#' className='veh-ed-nav-link'>Writing Samples</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfessionalServices
