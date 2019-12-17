import React, { Component } from 'react'
import './style.css'

class ABookOfSigns extends Component {
  render () {
    return (
      <div className='book-of-signs-main-container'>
        <h3 className='bold-text'>Retail price: $5, includes shipping</h3>
        <p className='text'>Size 4 in. x 5 in.</p>
        <p className='text'>96 pages</p>
        {/* <p className='text'>Edition is 1,000 copies.</p> */}
        <p className='text'>Now in its third printing</p>
        <p className='text-last'>Co-publication of Vehicle Editions and <a href='https://www.ilylali.com/' className='ilylali-link' target='_blank' rel='noopener noreferrer'>ilylali</a></p>
        <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta'>
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

export default ABookOfSigns
