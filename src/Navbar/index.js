import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import HomePage from '../HomePage'
import GrantsAndAwards from '../GrantsAndAwards'
import Exhibitions from '../Exhibitions'
import AvailableTitles from '../AvailableTitles'
import OutOfPrintTitles from '../OutOfPrintTitles'
import Consulting from '../Consulting'
import Clients from '../Clients'
import Books from '../Books'
import Magazines from '../Magazines'
import Anthologies from '../Anthologies'
import Poems from '../Poems'
import PoemReadings from '../PoemReadings'
import WritingSamples from '../WritingSamples'
import OtherPublications from '../OtherPublications'
import Music from '../Music'
import ArtWork from '../ArtWork'
import ArtExhibits from '../ArtExhibits'
import Activism from '../Activism'
import About from '../About'
import Contact from '../Contact'

import './style.css'

class Navbar extends Component {
  render () {
    return (
      <Router className='nav' style={{ borderBottom: '1px solid black' }}>
        <div className='nav-container'>
          <ul className='nav-bullets-container'>
            <li className='name-link'>
              <div className='section'>
                <div className='section__item name-div'>
                  <a href='#changeMeToARouteLink' id='my-name'>
                    <Link className='home-link' to='/home'>
                      <h1 id='annabel-name'>ANNABEL LEE</h1>
                    </Link>
                  </a>
                </div>
              </div>
            </li>
            <li className='links first-link'>
              <div className='section'>
                <div className='section__item'>
                  <div className='dropdown'>
                    <a
                      href='#about-page'
                      className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                    >
                      <span className='sm-link__label dropbtn'>Vehicle Editions </span>
                    </a>
                    <div className='dropdown-content'>
                      <Link className='dropdown-tabs' to='/grantsAndAwards'>Grants and Awards</Link>
                      <Link className='dropdown-tabs' to='/exhibitions'>Exhibitions</Link>
                      <Link className='dropdown-tabs' to='/availableTitles'>Available Titles</Link>
                      <Link className='dropdown-tabs' to='/outOfPrintTitles'>Out of Print Titles</Link>

                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <div className='dropdown'>
                    <a
                      href='#about-page'
                      className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                    >
                      <span className='sm-link__label dropbtn'>Publications Consulting  </span>
                    </a>
                    <div className='dropdown-content' id='publications-drop'>
                      <Link className='dropdown-tabs' to='/consulting'>Consulting</Link>
                      <Link className='dropdown-tabs' to='/clients'>Clients</Link>
                      <Link className='dropdown-tabs' to='/writingsamples'>Writing Samples</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <div className='dropdown'>
                    <a
                      href='#about-page'
                      className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                    >
                      <span className='sm-link__label dropbtn'>Writing</span>
                    </a>
                    <div className='dropdown-content' id='writing-drop'>
                      <Link className='dropdown-tabs' to='/books'>Books</Link>
                      <Link className='dropdown-tabs' to='/magazines'>Magazines</Link>
                      <Link className='dropdown-tabs' to='/anthologies'>Anthologies</Link>
                      <Link className='dropdown-tabs' to='/poems'>Poems</Link>
                      <Link className='dropdown-tabs' to='/poemReadings'>Poem Readings</Link>
                      <Link className='dropdown-tabs' to='/writingSamples'>Writing Samples</Link>
                      <Link className='dropdown-tabs' to='/otherPublications'>Other Publications</Link>

                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <div className='dropdown'>
                    <a
                      href='#about-page'
                      className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                    >
                      <span className='sm-link__label dropbtn'>Music and Art</span>
                    </a>
                    <div className='dropdown-content'>
                      <Link className='dropdown-tabs' to='/music'>Music</Link>
                      <Link className='dropdown-tabs' to='/artWork'>Art Work</Link>
                      <Link className='dropdown-tabs' to='/artExhibits'>Art Exhibits</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <Link className='dropdown-tabs noDropDown' to='/activism'><span className='sm-link__label'>Activism</span></Link>
                  </a>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <Link className='dropdown-tabs noDropDown' to='/about'><span className='sm-link__label'>About</span></Link>
                  </a>
                </div>
              </div>
            </li>
            <li className='links'>
              <div className='section'>
                <div className='section__item'>
                  <a
                    href='#contact-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <Link className='dropdown-tabs noDropDown' to='/contact'><span className='sm-link__label'>Contact</span></Link>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <Route path='/home' component={HomePage} />
          <Route path='/grantsAndAwards' component={GrantsAndAwards} />
          <Route path='/exhibitions' component={Exhibitions} />
          <Route path='/availableTitles' component={AvailableTitles} />
          <Route path='/outOfPrintTitles' component={OutOfPrintTitles} />
          <Route path='/consulting' component={Consulting} />
          <Route path='/clients' component={Clients} />
          <Route path='/books' component={Books} />
          <Route path='/magazines' component={Magazines} />
          <Route path='/anthologies' component={Anthologies} />
          <Route path='/poems' component={Poems} />
          <Route path='/poemReadings' component={PoemReadings} />
          <Route path='/writingSamples' component={WritingSamples} />
          <Route path='/otherPublications' component={OtherPublications} />
          <Route path='/music' component={Music} />
          <Route path='/artWork' component={ArtWork} />
          <Route path='/artExhibits' component={ArtExhibits} />
          <Route path='/activism' component={Activism} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Navbar
















{ /*

    <div className='nav-container'>
        <div className='name-div'>
          <a href='#changeMeToARouteLink' id='my-name'>
            <h1 className='name'>Annabel Lee</h1>
          </a>
        </div>
        <ul className='nav-bullets-container'>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn'>Vehicle Editions </span>
                  </a>
                  <div className='dropdown-content'>
                    <a href='#' className='dropdown-tabs'>Grants and Awards</a>
                    <a href='#' className='dropdown-tabs'>Exhibitions</a>
                    <a href='#' className='dropdown-tabs'>Available Titles</a>
                    <a href='#' className='dropdown-tabs'>Out of Print Titles</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn'>Publications Consulting  </span>
                  </a>
                  <div className='dropdown-content'>
                    <a href='#' className='dropdown-tabs'>Consulting</a>
                    <a href='#' className='dropdown-tabs'>Clients</a>
                    <a href='#' className='dropdown-tabs'>Writing Samples</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn'>Writing  </span>
                  </a>
                  <div className='dropdown-content'>
                    <a href='#' className='dropdown-tabs'>Books</a>
                    <a href='#' className='dropdown-tabs'>Magazines</a>
                    <a href='#' className='dropdown-tabs'>Anthologies</a>
                    <a href='#' className='dropdown-tabs'>Poems</a>
                    <a href='#' className='dropdown-tabs'>Poem Readings</a>
                    <a href='#' className='dropdown-tabs'>Writing Samples</a>
                    <a href='#' className='dropdown-tabs'>Other Publications</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn'>Music and Art  </span>
                  </a>
                  <div className='dropdown-content'>
                    <a href='#' className='dropdown-tabs'>Music</a>
                    <a href='#' className='dropdown-tabs'>Art Work</a>
                    <a href='#' className='dropdown-tabs'>Art Exhibits</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <a
                  href='#about-page'
                  className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                >
                  <span className='sm-link__label'>Activism</span>
                </a>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <a
                  href='#about-page'
                  className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                >
                  <span className='sm-link__label'>About</span>
                </a>
              </div>
            </div>
          </li>
          <li className='links'>
            <div className='section'>
              <div className='section__item'>
                <a
                  href='#contact-page'
                  className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                >
                  <span className='sm-link__label'>Contact</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div> */ }



// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />
// <img className='down-arrow' src='https://i.imgur.com/NzAnCOB.png' />