import React, { Component } from 'react'
import './style.css'

class Exhibitions extends Component {
  render () {
    return (

      <div className='exhibitions-main-container'>
        <div className='exhibitions-title-div'>
          <h1 className='exhibitions-main-title'>Exhibitions</h1>
          <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-exhibitions' alt='' />
        </div>
        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/QKrXcQp.jpg' className='benson-gallery-photo-left' alt='' />
          <img src='https://i.imgur.com/Jp7zDVk.jpg' className='benson-gallery-photo-right' alt='' />
        </div>
        <p className='benson-images-description'>images from an exhibit at Elaine Benson Gallery</p>

        <div className='exhibitions-info-container'>

          <div className='regular-exhibitions-container'>
            <div className='regular-exhibitions-title-container'>
              <h2 className='regular-exhibitions-title'>Exhibitions</h2>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1979</p>
              <p className='exhibition-name'>A Secret Location on the Lower East Side</p>
              <h3 className='exhibition-location'><span className='span-italic'>The New York Public Library, New York, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1979</p>
              <p className='exhibition-name'>Christopher Knowles: Typings featured</p>
              <h3 className='exhibition-location'><span className='span-italic'>Holly Solomon Gallery, New York, NY</span></h3>
              <p className='exhibition-name1'>Book Makers</p>
              <h3 className='exhibition-location2'> <span className='span-italic'>Arthur A. Houghton, Jr. Gallery, Cooper Union, New York, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>A New Direction Book Show</p>
              <h3 className='exhibition-location'><span className='span-italic'>Warren Street Gallery, Hudson, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>Book Rate: Artist Members Invitational</p>
              <h3 className='exhibition-location'><span className='span-italic'>Center for Book Arts, New York, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>The First Decade: Center for Book Arts</p>
              <h3 className='exhibition-location'><span className='span-italic'>The New York Public Library, New York, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>You Can’t Tell a Book By Its Cover</p>
              <h3 className='exhibition-location'><span className='span-italic'>Thorpe Intermedia Gallery, Sparkill, NY</span></h3>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>Quilts Installations</p>
              <h3 className='exhibition-location'><span className='span-italic'>Windows on White, New York, NY</span></h3>
              <p className='exhibition-name1'> Vehicle Editions</p>
              <h3 className='exhibition-location1'><span className='span-italic'>Elaine Benson Gallery, Bridgehampton, NY</span></h3>
              <p className='exhibition-name1'>International Artists’ Books Exhibition</p>
              <h3 className='exhibition-location1'><span className='span-italic'>Frankfurter Kunstverein, Frankfurt, Germany</span></h3>
            </div>
          </div>

          <div className='benson-gallery-div-2'>
            <img src='https://i.imgur.com/RXud8he.jpg' className='train-ride-photo-bottom' alt='' />
          </div>
          <p className='train-ride-photo-description'>Train Ride plate and artwork</p>

          <div className='trade-show-container'>
            <div className='trade-show-title-container'>
              <h2 className='trade-show-title'>Trade Show Exhibitions</h2>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1985</p>
              <p className='exhibition-name'>Frankfurt International Book Fair, <span className='span-italic'>Frankfurt Germany</span></p>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1982</p>
              <p className='exhibition-name'>New York Book Fair, <span className='span-italic'>New York, NY</span></p>
            </div>
            <div className='exhibitions-div'>
              <p className='exhibition-year'>1979</p>
              <p className='exhibition-name'>New York is Book Country, <span className='span-italic'>New York, NY</span></p>
            </div>
            <div className='exhibitions-div bottom-div'>
              <p className='exhibition-year'>1978</p>
              <p className='exhibition-name'>Book Affair at Harvard, <span className='span-italic'>Cambridge, MA</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Exhibitions

// Add images of exhibit at Elaine Benson Gallery (in V.E. folder)
