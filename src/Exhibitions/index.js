import React, { Component } from 'react'
import './style.css'

class Exhibitions extends Component {
  render () {
    return (
      <div className='exhibitions-container'>
        <div>
          <h1>Exhibitions</h1>
        </div>
        <div className='Grants-container'>
          <h2>Exhibitions</h2>
          <div>
            <p className='exhibition-year'>1979</p>
            <p className='exhibition-name'>A Secret Location on the Lower East Side</p>
            <h3 className='exhibition-location'>The New York Public Library, New York, NY</h3>
          </div>
          <div>
            <p className='exhibition-year'>1978</p>
            <p className='exhibition-name'>A New Direction Book Show</p>
            <h3 className='exhibition-location'>Warren Street Gallery, Hudson, NY</h3>
          </div>
          <div>
            <p className='exhibition-year'>1978</p>
            <p className='exhibition-name'>Book Rate: Artist Members Invitational</p>
            <h3 className='exhibition-location'>Center for Book Arts, New York, NY</h3>
          </div>
          <div>
            <p className='exhibition-year'>1978</p>
            <p className='exhibition-name'>The First Decade: Center for Book Arts</p>
            <h3 className='exhibition-location'>The New York Public Library, New York, NY</h3>
          </div>
          <div>
            <p className='exhibition-year'>1978</p>
            <p className='exhibition-name'>You Can’t Tell a Book By Its Cover</p>
            <h3 className='exhibition-location'>Thorpe Intermedia Gallery, Sparkill, NY</h3>
          </div>
          <div>
            <p className='exhibition-year'>1978</p>
            <p className='exhibition-name'>Quilts Installations</p>
            <h3 className='exhibition-location'>Windows on White, New York, NY</h3>

            <p className='exhibition-name'> Vehicle Editions</p>
            <h3 className='exhibition-location'>Elaine Benson Gallery, Bridgehampton, NY</h3>

            <p className='exhibition-name'>International Artists’ Books Exhibition</p>
            <h3 className='exhibition-location'>Frankfurter Kunstverein, Frankfurt, Germany</h3>
          </div>
          <div>
            <p className='exhibition-year'>1979</p>
            <p className='exhibition-name'>Christopher Knowles: Typings featured</p>
            <h3 className='exhibition-location'>Holly Solomon Gallery, New York, NY</h3>

            <p className='exhibition-name'>Book Makers</p>
            <h3 className='exhibition-location'> Arthur A. Houghton, Jr. Gallery, Cooper Union, New York, NY</h3>
          </div>
        </div>

        <div className='Awards-container'>
          <h2>Trade Show Exhibitions</h2>
          <div>
            <p className='trade-show-exhibition-year'>1985</p>
            <p className='trade-show-exhibition-name'>Frankfurt International Book Fair, Frankfurt Germany</p>
          </div>
          <div>
            <p className='trade-show-exhibition-year'>1982</p>
            <p className='trade-show-exhibition-name'>New York Book Fair, New York, NY</p>
          </div>
          <div>
            <p className='trade-show-exhibition-year'>1979</p>
            <p className='trade-show-exhibition-name'>New York is Book Country, New York, NY</p>
          </div>
          <div>
            <p className='trade-show-exhibition-year'>1978</p>
            <p className='trade-show-exhibition-name'>Book Affair at Harvard, Cambridge, MA</p>
          </div>
        </div>
      </div>
    )
  }
}


// Add images of exhibit at Elaine Benson Gallery (in V.E. folder)

export default Exhibitions
