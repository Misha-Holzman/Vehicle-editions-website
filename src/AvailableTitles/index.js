import React, { Component } from 'react'
import ABookOfSigns from '../ABookOfSigns'
import Typings from '../Typings'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style.css'

class AvailableTitles extends Component {
  render () {
    return (
      <Router>
        <div className='available-titles-main-container'>
          <div className='available-titles-title-div'>
            <h1 className='available-titles-main-title'>Available Titles</h1>
            <img src='https://i.imgur.com/1KMe3ta.png' className='car-photo-vehicle-editions-available' alt='' />
          </div>
          <div className='available-titles-info-container'>
            <div className='available-titles-container'>
              <div className='available-titles-info-div-signs'>
                <Link className='book-of-signs-link' to='/bookOfSigns'>
                  <p className='available-titles-signs-name'>A Book of Signs</p>
                </Link>
                <div className='signs-dynamic-div'>
                  <Link className='book-of-signs-link' to='/bookOfSigns'>
                    <img src='https://i.imgur.com/T0mI8W7.jpg' className='book-of-signs-img' alt='' />
                  </Link>
                  <Route path='/bookOfSigns' component={ABookOfSigns} />
                </div>
              </div>
              {/* https://i.imgur.com/6GmOutE.jpg */}

              {/* SEPERATE THE PHOTO OF RUDY FROM THE BOOK COVER AND PUT THE PHOTO FARTHER DOWN THE PAGE */}
              <div className='available-titles-info-div-rudy'>
                <a className='rudy-conversations-link' href='/ConversationsWithRudy'>
                  <p className='available-titles-rudy-name'>Conversations with Rudy Burckhardt About Everything</p>
                </a>
                <h3 className='rudy-author-name-2'>by Simon Pettet</h3>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <a className='rudy-conversations-link-2' href='/ConversationsWithRudy'>
                      <img src='https://i.imgur.com/sa0HnEb.jpg' className='convo-with-rudy-img' alt='' />
                      <img src='https://i.imgur.com/q1cg4L3.jpg' className='convo-with-rudy-2-img' alt='' />
                    </a>
                    <p className='rudy-photos-description1'>Rudy Burckhadt</p>
                    <p className='rudy-photos-description2'>Photo by Timothy Greenfield-Sanders</p>
                    {/* <Route path='/ConversationsWithRudy' component={ConversationsWithRudy} /> */}
                  </div>
                </div>
              </div>
              <div className='available-titles-info-div-rudy'>
                <Link className='rudy-conversations-link-2' to='/typings'>
                  <p className='available-titles-rudy-name'>Typings by Christopher Knowles</p>
                </Link>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <div className='rudy-conversations-link-2'>
                      <img src='https://i.imgur.com/pXNQi67.jpg' className='typings-img' alt='' />
                      <img src='https://i.imgur.com/7eKAd9N.jpg' className='typings-2-img' alt='' />
                    </div>
                    <p className='rudy-photos-description1'>Christopher Knowles</p>
                    <p className='rudy-photos-description2'>Photo by Richard Landry</p>
                    <div className='convos-with-rudy-main-container'>
                      <br />
                      <p className='typings-text'>Hardcover edition: red cloth over boards with green foil stamp</p>
                      <br />
                      <p className='typings-text'>Softcover: $300 per copy</p>
                      <p className='typings-text'>Hardcover: $400 per copy</p>
                      <div className='buy-now-div3'>
                        <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta' id='buy-now-rudy-link'>
                          <span className='buy-now-rudy-text'>Buy Now</span>
                          <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
                            <path d='M1,5 L11,5' />
                            <polyline points='8 1 12 5 8 9' />
                          </svg>
                        </a>
                      </div>
                      <Route path='/typings' component={Typings} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='available-titles-info-div-rudy'>
                <p className='available-titles-rudy-name'>Train Ride by Ted Berrigan</p>
                <div className='rudy-images-div'>
                  <div className='rudy-dynamic-div'>
                    <div className='rudy-conversations-link-2'>
                      <img src='https://i.imgur.com/sCQoBgB.jpg' className='train-ride-available-img' alt='' />
                    </div>
                    <p className='rudy-photos-description1'>Cover by Joe Brainard</p>
                    <div className='train-ride-main-container'>
                      <br />
                      <p className='typings-text'>Back in print</p>
                      <p className='typings-text'>Order yours today</p>
                      <p className='typings-text'>$12 per copy softcover</p>
                    </div>

                    <div className='av-titles-div-modal'>
                      <button type='button' data-toggle='modal' data-target='#Modal98' id='button-modal'>
                        <p className='clients-name'>MORE INFO</p>
                      </button>
                    </div>
                    <div class='modal fade bd-example-modal-lg' id='Modal98' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                      <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                        <div class='modal-content'>
                          <div class='modal-header'>
                            <h5 class='modal-title' id='exampleModalLabel'>Train Ride by Ted Berrigan</h5>
                            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                              <span aria-hidden='true'>&times;</span>
                            </button>
                          </div>
                          <div class='modal-body'>
                            <p className='train-modal-text'>AUTHOR CITY: born in Providence, Rhode Island</p>
                            <p className='train-modal-text'>AUTHOR/CONTRIBUTOR BIO(S): <br />
                                From a biography of Ted Berrigan written by Joe Brainard in
                                1967: “Ted Berrigan was born in Providence, R.I., on November 15th, 1934… He was raised a
                                Catholic and is mostly Irish. In 1954 e entered the Army and in 1957 he got out. He got his B.A.
                                from the University of Tulsa in 1959. He completed his M.A. work at the same school. His poetry
                                has appeared in so many magazines that it is impossible to name them. He is a real poet, 24
                                hours a day, and a wonderful person.” Ted Berrigan (1934 – 1983) was and remains a legend.
                                Joe Brainard (1942-1994) grew up in Tulsa, Oklahoma. At the age of 16 Joe got to know two
                                fellow classmates who, like him, felt somewhat marginalized: poets Ron Padgett and Dick
                                Gallup. Through them he met two graduate students at the University of Tulsa, the poet Ted
                                Berrigan and Patricia Mitchell, who would prove to be lifelong friends. Still in high school,
                                Brainard, Padgett, and Gallup produced<em>The White Dove Review</em>, an art and literary magazine.
                                Joe's drawings, collages, assemblages, and paintings are in the collections of the Museum of
                                Modern Art, the Metropolitan Museum, the Whitney Museum, the Utah Museum of Fine Arts,
                                Yale University Art Museum, and the Joe Brainard Archive at the University of California, San
                                Diego, as well as in many private and corporate collections. His work is now represented by the
                                Tibor de Nagy Gallery.
                            </p>
                            <p className='train-modal-text'>DESCRIPTION: <br />
                                First printed in 1979 using letterpress and handbinding, this second printing is limited to
                                999 copies and is a digital facsimile of that first edition, 7 inches tall by 5 inches wide
                                (except for updates to the colophon and copyright pages). "Train Ride, subtitled
                                'February 18th, 1971: for Joe [Brainard]&#39; is a long poem in the tradition of Herodotus,
                                Goethe, Laurence Sterne, Agatha Christie, &amp; Blaise Cendrars — a poem of the travails
                                &amp; pleasures of travel, truly of the late 20th century in that its verbal events are more
                                internal than external: ‘Out the Window / is / Out to Lunch!!’ — one of the results of the
                                developments of industrial capitalism initiated by steam engine and rail-way ... Thus we
                                have a great deal of hypothetical &amp; remembered fucking, money, friendship — &#39;amistad&#39;
                                — and, indeed throughout, witty &amp; precise meditation on the act of writing itself. The
                                persona that emerges is the &#39;poet in the state of surprise&#39; (Apollinaire), a saintly yet
                                human figure, addressing us with wonderful Peruvian frankness: ‘I&#39;d be a terrific Senator
                                / because I&#39;d love it’ ... The ‘Our Friends’ section is a marvelous catalog of prominence...
                                One could go on cataloging the delights of the ride: one would be wiser to simply urge
                                all who can run &amp; read to take it, with Ted Berrigan, a Great Companion.&quot;
                                --Anselm Hollo</p>
                            <p className='train-modal-text'>PUB DATE: 15 November 2019</p>
                            <p className='train-modal-text'>ANTICIPATED ARRIVAL DATE AT SPD: 15 December 2019</p>
                            <p className='train-modal-text'>PUBLISHER: Vehicle Editions</p>
                            <p className='train-modal-text'>GENRE: poetry</p>
                            <p className='train-modal-text'>ISBN: 978-0-931428-210</p>
                            <p className='train-modal-text'>BINDING: perfectbound softcover</p>
                            <p className='train-modal-text'>PAGE COUNT: 96</p>
                            <p className='train-modal-text'>PRICE: $12</p>
                            <div className='train-modal-div-link'>
                              <a href='http://www.joebrainard.org/' target='_blank' rel='noopener noreferrer' className='train-modal-text-link'>Joe Brainard's Website</a>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className='train-modal-text'>300dpi cover image named with the book&#39;s ISBN number (without dashes)</p>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='buy-now-div2'>
                    <a href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=764459c9539e5&mfid=1563826348997_764459c9539e5#/checkout/openButton' target='_blank' rel='noopener noreferrer' className='cta' id='buy-now-rudy-link'>
                      <span className='buy-now-rudy-text'>Buy Now</span>
                      <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
                        <path d='M1,5 L11,5' />
                        <polyline points='8 1 12 5 8 9' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default AvailableTitles

// https://i.imgur.com/hXoWiSw.jpg
