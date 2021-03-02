import React, { Component } from 'react'
import './style.css'

class AboutVehicleEditions extends Component {
  render () {
    return (
      <div className='about-main-container module'>
        <div className='about-title-div'>
          <h1 className='about-main-title'>About</h1>
        </div>

        <div className='about-container-bottom'>
          <div className='homepage-about-container-bottom'>
            <div className='about-car-img-div'>
              <img src='https://i.imgur.com/SVpQfdl.png' className='car-photo-about' alt='' />
            </div>
            <div className='about-text-container'>
              <h2 className='about-text-titles'>Vehicle Editions</h2>
              <p className='about-about-text'>
              Vehicle Editions was founded in 1976 by Annabel Levitt. Annabel Lee (she married the Lee in 1988)
              brings diverse experience to her role as publisher. A printer (letterpress and offset), hand bookbinder,
              teacher of book crafts, bookkeeper, phototypesetter, monotype typesetter, hand typesetter and writer,
              Annabel has worked for many other publishers (including responsibilities as Managing Editor and as
              Production Manager) and she has worked extensively with art book publishers on behalf of European
              printers. The publisher thus has had full involvement with the artistic, technical, literary and
              business aspects of the company. <br /> <br />The authors of Vehicle Editions include Jayne Anne Phillips,
              Ted Berrigan, Christopher Knowles and Roberta Allen. Authors, artists, craftspeople and the publisher
              have worked in close association, collaborating on format, production and editorial decisions, to ensure
              that the format of each book reflects its contents. <br /> <br />The attempt has always been made that the book’s
              exterior be an expression of its interior. For this reason, Vehicle Editions do not often resemble
              each other. Editions range from 100 to 5,000 copies depending on production methods and intent. Vehicle
              Editions has employed commercial printers and binders for some titles, and for others all work was
              done by hand at the kitchen table.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutVehicleEditions
