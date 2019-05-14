import React, { Component } from 'react'
import './style.css'

class HomePage extends Component {
  render () {
    return (
      <div className='main-page-container'>
        <img className='homepage-img' src='https://i.imgur.com/U2obmgg.jpg' />
        <div className='arrow-div'>
          <a href='#bottom-of-homepage-arrow-link' id='link'>
            <img
              src='https://i.imgur.com/T5f8v9i.png'
              height='30px'
              className='arrow'
            />
          </a>
        </div>
        <div className='bottom-homepage-container' id='bottom-of-homepage-arrow-link'>
          <h1 className='welcome-title'>WELCOME!</h1>
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

          <div className='homepage-news-main-container'>
            <h1 className='news-title'>NEWS</h1>
            <div className='news-boxes-main-container'>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
            </div>
          </div>
          <div className='homepage-news-main-container'>
            <h1 className='news-title'>OTHER</h1>
            <div className='news-boxes-main-container'>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>YO</h3>
                <p className='news-container-box-text'>yo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
