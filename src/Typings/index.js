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
        <div className='buy-now-div4'>
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top' className='paypal-option-button'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='HR3GZR2TF4PNJ' />
            <table>
              <tr><td><input type='hidden' name='on0' value='Edition Type' />Edition Type</td></tr><tr><td><select name='os0'>
                <option value='Softcover'>Softcover $300.00 USD</option>
                <option value='Hardcover'>Hardcover $400.00 USD</option>
              </select> </td></tr>
            </table>
            <input type='hidden' name='currency_code' value='USD' />
            <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!' />
            <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
          </form>
        </div>
        <img src='https://i.imgur.com/drvZ7fx.jpg' className='typings-article' />
      </div>
    )
  }
}

export default Typings
