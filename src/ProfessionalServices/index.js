import React, { Component } from 'react'
import './style.css'

class ProfessionalServices extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='pro-serv-title-div'>
          <h1 className='professional-services-main-title'>Professional Services</h1>
        </div>
        <div className='clients-title-div'>
          <img src='https://i.imgur.com/q2NiKoA.jpg' id='clients-car-photo-1' alt='' />
        </div>
        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div'>
              <ul className='veh-ed-nav-ul'>
                <li className='veh-ed-nav-li'>
                  <a href='/Clients' className='veh-ed-nav-link'><span id='links-pages-style'>Clients</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='/EditorialProductionServices' className='veh-ed-nav-link'><span id='links-pages-style'>Editorial & Production Services</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='WritingSamples' className='veh-ed-nav-link'><span id='links-pages-style'>Writing Samples</span></a>
                </li>
                <li className='veh-ed-nav-li'>
                  <a href='Testimonials' className='veh-ed-nav-link'><span id='links-pages-style'>Testimonials</span></a>
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
