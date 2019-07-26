import React, { Component } from 'react'
import './style.css'

class Testimonials extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='testimonials-main-title'>Testimonials</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' alt='' />
        </div>
        <div className='testimonials-info-container'>
          <div className='testimonials-container'>
            <div className='homepage-news-main-container'>
              <div className='testimonials-boxes-main-container'>
                <div className='testimonials-container-boxes'>
                  <h3 className='testimonials-container-box-title'>YO</h3>
                  <p className='testimonials-container-box-text'>yo</p>
                </div>
                <div className='testimonials-container-boxes'>
                  <h3 className='testimonials-container-box-title'>YO</h3>
                  <p className='testimonials-container-box-text'>yo</p>
                </div>
                <div className='testimonials-container-boxes'>
                  <h3 className='testimonials-container-box-title'>YO</h3>
                  <p className='testimonials-container-box-text'>yo</p>
                </div>
                <div className='testimonials-container-boxes'>
                  <h3 className='testimonials-container-box-title'>YO</h3>
                  <p className='testimonials-container-box-text'>yo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
