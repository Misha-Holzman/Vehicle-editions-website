import React, { Component } from 'react'
import './style.css'

class Writing extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='books-title-div'>
          <h1 className='writing-main-title'>Writing</h1>
        </div>
        <div className='car-pic-writing'>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-writing' alt='' />
        </div>
        <div className='veh-ed-nav-info-container'>
          <div className='veh-ed-nav-container'>
            <div className='veh-ed-nav-bullets-div-writing'>
              <ul className='veh-ed-nav-ul'>
                <li className='writing-nav-li'>
                  <a href='/Books' className='veh-ed-nav-link'><span id='links-pages-style'>Books</span></a>
                </li>
                <li className='writing-nav-li'>
                  <a href='/Magazines' className='veh-ed-nav-link'><span id='links-pages-style'>Magazines</span></a>
                </li>
                <li className='writing-nav-li'>
                  <a href='/Poems' className='veh-ed-nav-link'><span id='links-pages-style'>Poems</span></a>
                </li>
                <li className='writing-nav-li'>
                  <a href='/WritingSamples' className='veh-ed-nav-link'><span id='links-pages-style'>Writing Samples</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Writing
