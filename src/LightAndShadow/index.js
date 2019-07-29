import React, { Component } from 'react'
import './style.css'

class LightAndShadow extends Component {
  render () {
    return (
      <div className='light-and-shadow-main-container'>
        <h3 className='light-and-shadow-title-text'>Light and Shadow</h3>
        <p className='light-and-shadow-author-text'>by Simon Schuchat</p>
        <p className='light-and-shadow-text'>• 6 x 4 inches</p>
        <p className='light-and-shadow-text'>• 56 pages</p>
        <p className='light-and-shadow-text'>• 500 copies softcover</p>
        <p className='light-and-shadow-text'>• 26 signed and numbered hardcovers</p>
        <p className='light-and-shadow-text'>• Printed offset at Open Studio Workshop</p>
        <p className='light-and-shadow-text'>• Typeface: Patina</p>
        <p className='light-and-shadow-text'>• Simon Schuchat is also the author of Svelte (Genesis Grasp, 1971) and Blue Skies (Some of Us Press, 1973) and At Baoshan (Coffehouse Press, 1987). Schuchat served in the Foreign Service for over 25 years and is an East Asia expert.</p>
        <a href='https://www.amazon.com/Light-Shadow-Simon-Schuchat/dp/B000UDBT0C' target='_blank' rel='noopener noreferrer' className='cta'>
          <span className='buy-now-text'>Buy Now</span>
          <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
            <path d='M1,5 L11,5' />
            <polyline points='8 1 12 5 8 9' />
          </svg>
        </a>
      </div>
    )
  }
}

export default LightAndShadow
