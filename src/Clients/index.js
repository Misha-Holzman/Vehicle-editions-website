import React, { Component } from 'react'
import './style.css'

class Clients extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='clients-main-title'>Clients</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' />
        </div>
        {/* <div className='benson-gallery-div'>
          <img src='https://i.imgur.com/QKrXcQp.jpg' className='benson-gallery-photo-left' />
          <img src='https://i.imgur.com/Jp7zDVk.jpg' className='benson-gallery-photo-right' />
        </div> 
        
        */}
        <div className='clients-info-container'>
          <div className='client-pictures-div'>
            <div className='clients-car-photo-1-div'>
              <img src='https://i.imgur.com/weOVkAS.jpg' className='clients-car-photo-1' />
            </div>
            <div className='clients-car-photo-2-div'>
              <img src='https://i.imgur.com/VUrQiwH.jpg' className='clients-car-photo-2' />
            </div>
            <div className='clients-car-photo-3-div'>
              <img src='https://i.imgur.com/kdE8pCy.jpg' className='clients-car-photo-3' />
            </div>
            <div className='clients-car-photo-4-div'>
              <img src='https://i.imgur.com/zthUL5f.jpg' className='clients-car-photo-4' />
            </div>
            <div className='clients-car-photo-5-div'>
              <img src='https://i.imgur.com/nk2V53i.jpg' className='clients-car-photo-5' />
            </div>
            <div className='clients-car-photo-6-div'>
              <img src='https://i.imgur.com/re2fBfS.jpg' className='clients-car-photo-6' />
            </div>
          </div>
          <div className='clients-info-main-container'>
            <div className='clients-div'>
              <p className='clients-name'>Persea Books</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Harcourt, Brace, Jovanovich Children’s Trade Division</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Timken Publishers, Inc.,</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Books and Co. Bookstore</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Balance House, Inc., projects for Abrams and Dutton</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Merce Cunningham Dance Foundation</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>The Franklin Library</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Craft International Magazine</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>The World Crafts Council</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Skowhegan School of Painting and Sculpture, Maine</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Comproject BV</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Aperture Foundation</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>McGraw-Hill</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>John Wiley and Sons</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Facts on File</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>The College Board</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Chelsea House</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>New York State</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Cambridge University Press</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Cardozo School of Law</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Yeshiva University</p>
            </div>
            
            <div className='clients-div'>
              <p className='clients-name'>Harry N. Abrams</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Dutton</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Rogner and Bernhard GmBH, Munich, Germany</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Z Press, Calais VT</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Arti Grafiche Motta, Milan, Italy</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Comproject BV, Baarn, Holland</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Galen Press, Austerlitz, NY</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Family Business Publishing Company, Great Barrington, MA</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>The Stamford Review, Stamford, NY</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Ruth Kligman</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>Jean Stein</p>
            </div>
            <div className='clients-div'>
              <p className='clients-name'>David Rosenberg</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
