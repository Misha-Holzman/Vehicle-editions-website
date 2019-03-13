import React, { Component } from 'react'
import './style.css'

class HotAndCold extends Component {
  render () {
    return (
      <div className='hot-and-cold-main-container'>
        <h3 className='hot-and-cold-title-text'>Hot and Cold</h3>
        <p className='hot-and-cold-author-text'>by Richard Hell</p>
        <p className='hot-and-cold-text'>• Preview edition published for the author’s exhibition at Rupert Goldsworthy Gallery, New York, NY October 1998</p>
        <p className='hot-and-cold-text'>• Limited edition of 240 copies</p>
        <p className='hot-and-cold-text'>• Handbound softcovers and hardcovers</p>
        <p className='hot-and-cold-text'>• Printed digitally at Planet Color, Great Barrington, Massachusetts</p>
        <p className='hot-and-cold-text'>• Richard Hell was born and grew up in Lexington, KY. He dropped out of high school and came to New York to be a poet at the end of the 60s. He co-founded, played in, sang in and wrote for several influential music groups including Television before forming the Voidoids in the mid-70’s, and was a crucial originator of “punk.” He’s best known for his album Blank Generation (1977) and his novel Go Now (1966). He lives in New York.</p>
      </div>
    )
  }
}

export default HotAndCold
