import React, { Component } from 'react'
import './style.css'

class Books extends Component {
  render () {
    return (
      <div className='books-main-container'>
        <div className='books-title-div'>
          <h1 className='books-main-title'>Books</h1>
          <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-books' />
        </div>
        <div className='books-container'>
          <div className='books-title-container'>
            <h2 className='books-title'>Published Writing by Annabel Lee</h2>
          </div>
          <div className='books-info-container'>
            <p className='books-text'><span className='book-text-bold'>Minnesota Drift forthcoming chapbook of poems</span>, Wry, Longmont, Colorado, 2018</p>
            <p className='books-text'><span className='book-text-bold'>Basket Collection of poems</span>, Accent Editions, Chester NY, 2012</p>
            <p className='books-text'><span className='book-text-bold'>At the Heart of the World by Blaise Cendrars</span>, translation from the French, O Press, New York NY, 1978</p>
            <p className='books-text'><span className='book-text-bold'>Continental 34s Collection of poems</span>, Vehicle Editions, New York NY, 1976</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Books
