import React, { Component } from 'react'
import './style.css'

class PoemReadings extends Component {
  render () {
    return (
      <div className='poem-readings-main-container'>
        <div className='poem-readings-title-div'>
          <h1 className='poem-readings-main-title'>Poem Readings</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-poem-readings' />
        </div>

        <div className='poem-readings-info-container'>

          <div className='poem-readings-container'>
            <div className='-title-container'>
              <h2 className='-title'>Published writing by Annabel Lee</h2>
            </div>
          </div>
            

        </div>

      </div>
    )
  }
}

export default PoemReadings
