import React, { Component } from 'react'
import './style.css'

class WritingSamples extends Component {
  render () {
    return (
      <div className='writing-samples-main-container'>
        <div className='writing-samples-title-div'>
          <h1 className='writing-samples-main-title'>Writing Samples</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='writing-samples-car-photo' />
        </div>
        <div className='writing-samples-main-div'>
          <div className='donna-dennis-passage-div'>
            <a href='' className='link-to-dennis-passage' target='_blank'><h3 className='dennis-passage-title'>Passage: Donna Dennis at Lesley Heller</h3></a>
            <p className='dennis-passage-author'>by Annabel Lee</p>
            <p className='dennis-passage-name-of-show'>Donna Dennis: Ship and Dock/Nights and Days or The Gazer at Lesley Heller Gallery</p>
            <a href='https://www.lesleyheller.com/' target='_blank' className='dennis-passage-gallery-link'>
              <p className='dennis-passage-gallery'>Lesley Heller Gallery</p>
            </a>
            <p className='dennis-passage-date'>May 31 to June 30, 2018</p>
            <p className='dennis-passage-address'>54 Orchard Street, New York City </p>
            <p className='dennis-passage-article'>Read the article at <a href='http://www.artcritical.com/2018/06/18/annabel-lee-on-donna-dennis/' target='_blank' className='dennis-passage-gallery-link'>ArtCritical.com</a></p>
          </div>
          <div className='brown-harris-pages'>
            <img src='https://i.imgur.com/asKV8Xn.jpg' />
            <img src='https://i.imgur.com/BSttQQ4.jpg' />
            <img src='https://i.imgur.com/KGwn8bq.jpg' />
            <img src='https://i.imgur.com/8NfEEYF.jpg' />
            <img src='https://i.imgur.com/e13XqWy.jpg' />
            <img src='https://i.imgur.com/JzjqH9W.jpg' />
          </div>
          <div className='humbolts-gift-passage'>
            <img src='https://i.imgur.com/cIYcxwh.jpg' />
            <img src='https://i.imgur.com/Dh9DT0V.jpg' />
            <img src='https://i.imgur.com/ZO74a8y.jpg' />
            <img src='https://i.imgur.com/ZHHVgLe.jpg' />
            <img src='https://i.imgur.com/CfHkv9k.jpg' />
            <img src='https://i.imgur.com/KuhEEYp.jpg' />
          </div>
          <div className='about-hudson-passage'>
            <img src='https://i.imgur.com/YeFvf53.jpg' />
          </div>
          <div className='natural-collection-passage'>
            <img src='https://i.imgur.com/F6hS1e2.png' />
          </div>
          <div className='chatham-press-passage'>
            <img src='https://i.imgur.com/3Ungzk2.jpg' />
          </div>
        </div>
      </div>
    )
  }
}

export default WritingSamples
