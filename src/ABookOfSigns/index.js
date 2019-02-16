import React, { Component } from 'react'
import './style.css'

class ABookOfSigns extends Component {
  render () {
    return (
      <div className='book-of-signs-main-container'>
        <h3>Retail price: $5, includes shipping</h3>
        <p>Size 4 in. x 5 in.</p>
        <p>96 pages</p>
        <p>Edition is 1,000 copies.</p>
        <p>Printed by KC Book Manufacturing (since 1906) in North Kansas City.</p>
        <p>Co-publication of Vehicle Editions and <a href='https://www.ilylali.com/' className='ilylali-link' target="_blank">ilylali</a></p>
        <button className='buy-now-button'>Buy Now</button>
      </div>
    )
  }
}

export default ABookOfSigns
