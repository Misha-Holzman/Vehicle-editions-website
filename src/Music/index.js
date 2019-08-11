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
        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/WGhjD18.jpg' className='annabel-playing-guitar-photo' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Ether Frolic Mob performing at Jalopy Theatre, Red Hook, Brooklyn 2010</p>
          <p className='benson-images-description'>(l-r: Jane Gilday, John Cohen, Annabel Lee, Jean Scofield, Peter Stampfel, Hubby Jenkins)</p>
        </div>
        <div className='music-line-container'>
          <img className='music-line-divider' src='https://i.imgur.com/AZpE0YA.png' alt='' />
        </div>
        <div className='hally-wood-title-container'>
          <h2 className='hally-wood-title'>Hally Wood: Annabel Lee's Aunt</h2>
        </div>

        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/oDzSagt.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Hally Wood and Woody Guthrie, at Hally Wood's apartment, New York NY 1959 (photo by A.D. Levitt)</p>
        </div>
        <div className='benson-gallery-div'>

          <img src='https://i.imgur.com/UNBUU0L.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Poster for People's Songs Artists concert in Chicago. October 10, 1944 <br /> featuring Pete Seeger, Woody Guthrie, Hally Wood and Betty Sanders</p>
        </div>

        <div className='benson-gallery-div-2pics'>
          <img src='https://i.imgur.com/04Ew07n.jpg' className='hally-album-photo-left' alt='' />
          <img src='https://i.imgur.com/0tGKmjn.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Hally Wood Sings Texas Folk Songs front cover of album</p>
        </div>
        <div className='benson-gallery-div-2pics'>
          <img src='https://i.imgur.com/457w6QO.jpg' className='hally-album-photo-left' alt='' />
          <img src='https://i.imgur.com/kUDgCtS.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>O' Lovely Appearance of Death front cover</p>
        </div>
        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/T832zfw.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Annabel Lee and her grandmother: Irene Nagel Wood</p>
        </div>
        <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/zotRdSG.jpg' className='hally-album-photo-right' alt='' />
        </div>
        <div className='hally-wood-info-container'>
          <p className='benson-images-description'>Hally Wood, her daughter Cynthia Tannehill Faulk Ryland and Hally’s grandson Cyrus Ryland</p>
        </div>

        <div className='hally-wood-song-link-container'>
          <h4 className='hally-wood-song'><a href='https://www.youtube.com/watch?v=Zyqx4kR4gOo' className='link-to-hally-wood-song'>Listen to Hally Wood and Alan Lomax singing, accompanied by Pete Seeger playing banjo</a></h4>
        </div>
      </div>
    )
  }
}

export default Music
