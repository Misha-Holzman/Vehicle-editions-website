import React, { Component } from 'react'
import './style.css'

class Typings extends Component {
  render () {
    return (
      <div className='typings-main-container'>
        <p className='typings-text'>Hardcover edition: red cloth over boards with green foil stamp</p>
        <br />
        <p className='typings-text'>Softcover: $300 per copy</p>
        <p className='typings-text'>Hardcover: $400 per copy</p>
        <div className='buy-now-div3'>
          <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta' id='buy-now-rudy-link'>
            <span className='buy-now-rudy-text'>Buy Now</span>
            <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
              <path d='M1,5 L11,5' />
              <polyline points='8 1 12 5 8 9' />
            </svg>
          </a>
        </div>
        <img src='https://i.imgur.com/drvZ7fx.jpg' className='typings-article' />
      </div>
    )
  }
}

export default Typings
