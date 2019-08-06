import React, { Component } from 'react'
import './style.css'

class News extends Component {
  render () {
    return (
      <div className='poem-readings-main-container'>
        <div className='bottom-homepage-container' id='bottom-of-homepage-arrow-link'>
          <div className='news-main-container'>
            <h1 className='news-main-title'>News</h1>
            <div className='news-boxes-main-container'>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>Train Ride by Ted Berrigan</h3>
                <img src='https://i.imgur.com/MV39t6b.jpg' className='news-train-ride-img' alt='' />
                <p className='news-container-box-text'>
                A reprint of Train Ride by Ted Berrigan, with cover by Joe Brainard (1,000 copies, offset) is at the printer and will be launched at the New York Art Book Fair at PS 1 in September
                </p>
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'><span className='news-book-of-signs-title'>Book of Signs</span> sold 1,700 copies in 10 months</h3>
                <p className='news-container-box-text'><a href='https://www.instagram.com/explore/tags/abookofsigns/' className='book-of-signs-instagram-link'>#abookofsigns</a></p>
                <img src='https://i.imgur.com/T0mI8W7.jpg' className='news-book-of-sign-img' alt='' />
              </div>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>Tony Towle</h3>
                <p className='news-container-box-text'>
                  <em>My First Three Books </em> will be published by Vehicle Editions. The book will include an interview with Tony Towle
                  by Leo Edelstein, photos from the sixties (many at Universal Limited Art Editions, West Islip NY), poems Tony Towle wrote
                  that are mentioned in the interview and a CD of Tony Towle reading those poems.
                </p>
              </div>
            </div>
            <h1 className='news-main-title'>Other</h1>
            <div className='news-boxes-main-container'>
              <div className='news-container-boxes'>
                <h3 className='news-container-box-title'>Occupy Wall Street Film</h3>
                <p className='news-container-box-text'>Directed by Annabel Lee</p>
                <br />
                <p className='news-container-box-text-roxy-festival'>
                  Premiered July 30, 2019 in the ROXY UNDERGROUND FILM FESTIVAL at the Roxy Cinema
                  in Tribeca at 2 Sixth Avenue
                </p>
                <br />
                <p className='news-container-box-text'>Recorded live the weekend of the 28th & 29th of October 2011</p>
                <p className='news-container-box-text'>featuring Angela Davis & Harry Belafonte</p>
                <p className='news-container-box-text'>Film score by Elana Belle Carroll</p>
                <p className='news-container-box-text'><em>(9 minutes 27 seconds)</em></p>
                <br />
                <p className='news-container-box-text'><a href='https://vimeo.com/31665177' className='occupy-video-link' target='_blank' rel='noopener noreferrer'>watch it here</a></p>
                <br />
                <p className='news-container-box-text'>
                  Occupy Wall Street began September 17, 2011 at Zuccotti Park, also known as Liberty Plaza,
                  and the encampment was evicted by NYPD in riot gear during pre-dawn hours of November 15, 2011 when about 200 people were arrested
                  including a member of the City Council. <br /> By 4:30 am the park was empty.
                </p>
                <p className='news-container-box-text'>
                  Occupy Wall Street was the epicenter of a movement protesting corporate greed and economic equality and there
                  were encampments around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News

// trainride news -> from email
// book of signs sold 17hundo copies in 10 months
// documentory film shot at occupy wall-street (9min-27sec) feat. at --- film festival
