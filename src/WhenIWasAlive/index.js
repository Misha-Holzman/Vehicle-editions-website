import React, { Component } from 'react'
import './style.css'

class WhenIWasAlive extends Component {
  render () {
    return (
      <div className='light-and-shadow-main-container'>
        <h3 className='light-and-shadow-title-text'>When I Was Alive</h3>
        <p className='light-and-shadow-author-text'>by Alice Notley</p>
        <p className='light-and-shadow-text'>
          Alice Notley is “always imaginative in exploring her thought paths, always generous with sympathies,
          always writing without regard to prominence.” Allen Ginsberg, Horizon “Alice Notley is in a class of
          her own and whatever influences she had, she has assimilated them admirably. She is a phenomena.”
          – Andrei Codrescu
        </p>
        <p className='light-and-shadow-text'>
          “Miss Notley is easily the most authentic and effective poet in many years to emerge from the Lower East Side
          division of what is loosely called ‘the New York School,’ that continuing academy-without-walls of the gritty
          and the urbane… Small twists with big effects, writerly tricks that tickle and stab, are Miss Notley’s forte,
          correlatives of a sensibility that shuttles riskily between fantasy and reality, literary dandyism and a daily
          life of family, friends and money worries.”
        </p>
        <img src='https://i.imgur.com/CqxZbcs.jpg' className='quilts-image' alt='' />
        {/* <a href='MoreOnQuilts'>Remembrance of Barbara Guest</a> */}
      </div>
    )
  }
}

export default WhenIWasAlive
