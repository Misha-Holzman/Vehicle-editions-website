import React, { Component } from 'react'
import './style.css'

class ABookOfSigns extends Component {
  render () {
    return (
      <div className='book-of-signs-main-container'>
        <h3 className='bold-text'>Retail price: $5</h3>
        <p className='text'>Includes shipping</p>
        <p className='text'>Size 4 in. x 5 in.</p>
        <p className='text'>96 pages</p>
        <p className='text'>Now in its third printing</p>
        <p className='text-last'>Co-publication of Vehicle Editions and <a href='https://www.ilylali.com/' className='ilylali-link' target='_blank' rel='noopener noreferrer'>ilylali</a></p>
        <div className='buy-now-div1'>
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank' className='paypal-form'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='GQGQ7ZV7CDFDL' />
            <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!' />
            <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
          </form>
        </div>
      </div>
    )
  }
}

export default ABookOfSigns
