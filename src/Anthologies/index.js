import React, { Component } from 'react'
import './style.css'

class Anthologies extends Component {
  render () {
    return (
      <div className='anthologies-main-container'>
        <div className='anthologies-title-div'>
          <h1 className='anthologies-main-title'>Anthologies</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-anthologies' />
        </div>

        <div className='anthologies-info-container'>

          <div className='anthologies-container'>
            <div className='-title-container'>
              <h2 className='-title'>Published writing by Annabel Lee</h2>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Anthologies
