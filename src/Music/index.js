import React, { Component } from 'react'
import './style.css'

class Music extends Component {
  render () {
    return (
      <div className='music-main-container'>
        <div className='music-title-div'>
          <h1 className='music-main-title'>Music</h1>
          <img src='https://i.imgur.com/RBHjIXp.png' className='car-photo-music' alt='' />
        </div>
        <div className='hally-wood-title-container'>
          <h2 className='hally-wood-title'>Hally Wood</h2>
        </div>
        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/04Ew07n.jpg' className='hally-album-photo-left' alt='' />
          <img src='https://i.imgur.com/0tGKmjn.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <p className='benson-images-description'>Hally Wood Sings Texas Folk Songs</p>

        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/457w6QO.jpg' className='hally-album-photo-left' alt='' />
          <img src='https://i.imgur.com/kUDgCtS.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <p className='benson-images-description'>American Folk Songs of Sadness and Melancholy</p>
        <p className='benson-images-description'>– O' Lovely Appearance of Death –</p>

        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/A6r4PN9.jpg' className='hally-album-photo-left' alt='' />
        </div>
        <p className='benson-images-description'>Me and my grandmother: Irene Nagel Wood</p>

        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/zotRdSG.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <p className='benson-images-description'>Hally Wood, her daughter Cynthia Tannehill Faulk Ryland and Hally’s grandson Cyrus Ryland</p>

        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/T832zfw.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <p className='benson-images-description'>Me and my grandmother</p>
      </div>
    )
  }
}

export default Music
