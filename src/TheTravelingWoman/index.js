import React, { Component } from 'react'
import './style.css'

class TheTravelingWoman extends Component {
  render () {
    return (
      <div className='light-and-shadow-main-container'>
        <h3 className='light-and-shadow-title-text'>Quilts</h3>
        <p className='light-and-shadow-author-text'>by Roberta Allen</p>
        <p className='light-and-shadow-author-text'>illustrations by Roberta Allen</p>
        <p className='light-and-shadow-text'>ISBN 0-931428-14-9</p>
        <p className='light-and-shadow-text'>7 x 5 inches</p>

        <p className='light-and-shadow-text'>128 Pages</p>

        <p className='light-and-shadow-text'>$12</p>

        <p className='light-and-shadow-text'>
          Printed offset in an edition of 1,500 by Drukkerij Tulp BV, Zwolle, Holland. Paper is wood-free half-matt machine coated art stock. Typeface is Journal Roman. The edition is all softcover and books are smyth sewn.
        </p>
        <p className='light-and-shadow-text'>
          Known for her conceptual art of the seventies, Roberta Allen showed with the John Weber Gallery in New York City for nine years. Her work has been widely exhibited since 1967 in galleries and museums across the U.S., Europe, Canada, Australia and New Zealand. Writing fiction is a recent development, but already her stores have appeared in anthologies such as Wild History and magazines such as Bomb and Between C and D which are at the cutting edge of new art and literation
        </p>
        <img src='https://i.imgur.com/kjR5UP1.jpg' className='traveling-woman-image' alt='' />
        {/* <a href='MoreOnQuilts'>Remembrance of Barbara Guest</a> */}
      </div>
    )
  }
}

export default TheTravelingWoman
