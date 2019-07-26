import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='books-title-div'>
          <h1 className='books-main-title'>About</h1>
          <img src='https://i.imgur.com/SVpQfdl.png' className='car-photo-about' />
        </div>
        <div className='books-container'>
          <div className='homepage-welcome-container'>
            <div className='welcome-text-container'>
              <p className='welcome-about-text'>
                Lorem ipsum dolor sit amet, duo inani eloquentiam efficiantur cu.
                Dicant vocent legendos at vel, ius hinc mollis adolescens cu, ut quo labitur tincidunt.
                Ad pri laudem noster iracundia, ne vix posse laudem.
                Ad sit case graeco, per ut iriure ocurreret, veri prima comprehensam nec ut.
                Facilisis urbanitas forensibus has ei, ad nec antiopam theophrastus.
              </p>
            </div>
            <div className='welcome-img-container'>
              <img className='welcome-profile-img' src='https://i.imgur.com/zQXeLhy.png' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
