import React, { Component } from 'react'
import './style.css'

class Quilts extends Component {
  render () {
    return (
      <div className='light-and-shadow-main-container'>
        <h3 className='light-and-shadow-title-text'>Quilts</h3>
        <p className='light-and-shadow-author-text'>by Barbara Guest</p>
        <p className='light-and-shadow-text'>• 5 3/4 x 8 1/4</p>
        <p className='light-and-shadow-text'>• 14 pages</p>
        <p className='light-and-shadow-text'>• This first edition is 100 copies. 50 copies are signed and numbered, each of these has a different cover, and each page of each of these copies is an original typeset specimen (via computer memory of composer). Each cover of the entire edition is an original Xerox color photocopy, designed and produced by Deborah S. Freedman at Jamie Canvas, New York. Composition done at the publisher on an IBM 82 Composer at Nachtmaschine Verlag, Basel. Binding done by hand at the publisher at Ecart, Geneva.</p>
        <img src='https://i.imgur.com/r5CuSqx.jpg' className='quilts-image' />
        {/* <a href='https://www.amazon.com/Light-Shadow-Simon-Schuchat/dp/B000UDBT0C' className='light-and-shadow-author-text'>Click here to buy on amazon</a> */}
        {/* <p className='light-and-shadow-title-text'>Reviews</p>
        <p className='light-and-shadow-text'>“Simon Schuchat, being a real poet; his poetry doesn’t tell you stuff: It is consciousness. This is a terrific book.”</p>
        <p className='light-and-shadow-author-text'>– Kathy Acker</p>
        <p className='light-and-shadow-text'>“In scale and ambition it is the opposite of petty, which is grand. At this point your reviewer couldn’t be more pleased.”</p>
        <p className='light-and-shadow-author-text'>– Ted Berrigan</p> */}
      </div>
    )
  }
}

export default Quilts
