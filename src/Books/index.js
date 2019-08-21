import React, { Component } from 'react'
import './style.css'

class Books extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='books-title-div'>
          <h1 className='books-main-title'>Books</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-books' alt='' />
        </div>
        <div className='books-container'>
          <div className='books-title-container'>
            <h2 className='books-title'>Books by Annabel Lee</h2>
          </div>
          <div className='books-info-container'>
            <p className='books-text'><span className='book-text-bold'><em>Minnesota Drift</em> forthcoming chapbook of poems</span>, Wry, Longmont, Colorado, 2019</p>
            <p className='books-text'><span className='book-text-bold'><em>Basket</em> collection of poems</span>, Accent Editions, Chester NY, 2012</p>
            <p className='books-text'><span className='book-text-bold'><em>At the Heart of the World</em> by Blaise Cendrars</span>, translation from the French, O Press, New York NY, 1978</p>
            <p className='books-text'><span className='book-text-bold'><em>Continental 34s</em> collection of poems</span>, Vehicle Editions, New York NY, 1976</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Books
