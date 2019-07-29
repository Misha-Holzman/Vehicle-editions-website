import React, { Component } from 'react'
import './style.css'

class GrantsAndAwards extends Component {
  render () {
    return (
      <div className='grants-and-awards-main-container'>
        <div className='grants-and-awards-title-div'>
          <h1 className='grants-awards-main-title'>Grants and Awards</h1>
          <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-grants' alt='' />
        </div>

        <div className='grants-and-awards-info-container'>

          <div className='grants-container'>
            <div className='grant-title-container'>
              <h2 className='grant-title'>Grants</h2>
            </div>
            <div className='g-a-info-div'>
              <p className='grant-year'>1979</p>
              <p className='grant-name'>Small Press Grant, Fellowship to the Editior</p>
              <h3 className='grant-giver'> - National Endowment for the Arts - </h3>
            </div>

            <div className='g-a-info-div'>
              <p className='grant-year'>1978</p>
              <p className='grant-name'>Small Press Grant, Fellowship to the Editior</p>
              <h3 className='grant-giver'>- National Endowment for the Arts -</h3>
            </div>
          </div>

          <div className='awards-container'>
            <h2 className='awards-title'>Awards</h2>
            <div className='g-a-info-div'>
              <p className='award-year'>1985</p>
              <p className='award-name'>Fast Lanes winner of the International Gallery of Superb Printing Award</p>
              <h3 className='award-giver'>- International Association of Printing House Craftsmen Inc. –</h3>
            </div>
            <div className='g-a-info-div'>
              <p className='award-year'>1982</p>
              <p className='award-name'>Nominated for the Pushcart Prize</p>
              <h3 className='award-giver'>- Smithsonian Depositions –</h3>
            </div>
            <div className='g-a-info-div'>
              <p className='award-year'>1979</p>
              <p className='award-name'>Finalist for the Elliston Book Award</p>
              <h3 className='award-giver'>- Just Let Me Do It –</h3>
            </div>
            <div className='g-a-info-div'>
              <p className='award-year'>1978</p>
              <p className='award-name'>St. Lawrence Award for Fiction</p>
              <h3 className='award-giver'>- Counting winner –</h3>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default GrantsAndAwards
