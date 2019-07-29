import React, { Component } from 'react'
import './style.css'

class EditorialProductionServices extends Component {
  render () {
    return (
      <div className='pub-consulting-main-container'>
        <div className='pub-consulting-title-div'>
          <h1 className='pub-consulting-main-title'>Editorial and Production Services</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='pub-consulting-car-photo' alt='' />
        </div>
        <div className='pub-consulting-info-and-pic-container'>
          <div className='pub-consulting-bullets-div'>
            <ul className='pub-consulting-ul'>
              <li className='pub-consulting-li'>Art reviewing</li>
              <li className='pub-consulting-li'>Book Production</li>
              <li className='pub-consulting-li'>Copyediting</li>
              <li className='pub-consulting-li'>Editing</li>
              <li className='pub-consulting-li'>Hand bookbinding</li>
              <li className='pub-consulting-li'>Letterpress printing</li>
              <li className='pub-consulting-li'>Literary editing</li>
              <li className='pub-consulting-li'>Marketing</li>
              <li className='pub-consulting-li'>Medical editing</li>
              <li className='pub-consulting-li'>Proofreading</li>
              <li className='pub-consulting-li'>Publication Design</li>
              <li className='pub-consulting-li'>Writing</li>
            </ul>
          </div>
          {/* <p className='pub-consulting-blurb'>I am highly experienced and skilled in these fields...write something here. Email me for professional inquaries.</p> */}
          <img src='https://i.imgur.com/cwf5lhD.png' className='heinkel-airplane-pic' alt='' />
        </div>
      </div>
    )
  }
}

export default EditorialProductionServices
