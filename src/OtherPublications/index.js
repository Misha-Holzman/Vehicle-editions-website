import React, { Component } from 'react'
import './style.css'

class OtherPublications extends Component {
  render () {
    return (
      <div className='other-pub-main-container'>
        <div className='other-pub-title-div'>
          <h1 className='other-pub-main-title'>Other Publications</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-other-pub' />
        </div>

        <div className='other-pub-info-container'>

          <div className='other-pub-container'>
            <div className='-title-container'>
              <h2 className='-title'>Published writing by Annabel Lee</h2>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default OtherPublications
