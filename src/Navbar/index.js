import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from '../HomePage'
import VehicleEditions from '../VehicleEditions'
import ProfessionalServices from '../ProfessionalServices'
import Writing from '../Writing'
import MusicAndArt from '../MusicAndArt'
import GrantsAndAwards from '../GrantsAndAwards'
import Exhibitions from '../Exhibitions'
import AvailableTitles from '../AvailableTitles'
import OutOfPrintTitles from '../OutOfPrintTitles'
import EditorialProductionServices from '../EditorialProductionServices'
import Clients from '../Clients'
import Books from '../Books'
import Magazines from '../Magazines'
import Anthologies from '../Anthologies'
import Poems from '../Poems'
// import News from '../News'
import Resume from '../Resume'
import PoemReadings from '../PoemReadings'
import WritingSamples from '../WritingSamples'
import Music from '../Music'
import ArtWork from '../ArtWork'
import ArtExhibits from '../ArtExhibits'
import Activism from '../Activism'
import About from '../About'
import Contact from '../Contact'
import Testimonials from '../Testimonials'
import AboutAnnabelLee from '../AboutAnnabelLee'
import AboutVehicleEditions from '../AboutVehicleEditions'

import './style.css'

import { slide as Menu } from 'react-burger-menu'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu () {
    this.setState({ menuOpen: false })
  }

  toggleMenu () {
    this.setState(state => {
      return ({ menuOpen: !state.menuOpen })
    })
  }

  render () {
    return (
      <Router className='nav'>
        <div className='nav-container'>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <div className='section menu-item item-1' id='hamburger-link-main-div'>
              <div className='section__item menu-item' id='hamburger-link-secondary-div'>
                <div className='dropdown menu-item' id='hamburger-link-third-div'>
                  <a
                    href='/#'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links menu-item'
                  >
                    <span className='sm-link__label dropbtn menu-item'><Link className='top-link menu-item' to='/vehicleEditions' onClick={() => this.closeMenu()}>Vehicle Editions</Link></span>
                  </a>
                  <div className='dropdown-content menu-item' id='vehicle-tab-drop'>
                    {/* <Link className='dropdown-tabs' to='/news' onClick={() => this.closeMenu()}><span id='drop-link-hover'>News</span></Link> */}
                    <Link className='dropdown-tabs' to='/grantsAndAwards' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Grants and Awards</span></Link>
                    <Link className='dropdown-tabs' to='/exhibitions' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Exhibitions</span></Link>
                    <Link className='dropdown-tabs' to='/availableTitles' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Available Titles</span></Link>
                    <Link className='dropdown-tabs' to='/outOfPrintTitles' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Out of Print Titles</span></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='section menu-item' id='hamburger-link-main-div'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn' onClick={() => this.closeMenu()}><Link className='top-link' to='/professionalServices' onClick={() => this.closeMenu()}>Professional Services</Link></span>
                  </a>
                  <div className='dropdown-content' id='publications-drop'>
                    <Link className='dropdown-tabs' to='/resume' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Resume</span></Link>
                    <Link className='dropdown-tabs' id='e-and-p-services-link' to='/editorialAndProductionServices' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Editorial and Production Services</span></Link>
                    <Link className='dropdown-tabs' to='/clients' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Professional Experience</span></Link>
                    <Link className='dropdown-tabs' to='/writingsamples' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Writing Samples</span></Link>
                    {/* <Link className='dropdown-tabs' to='/testimonials' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Testimonials</span></Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='section menu-item' id='hamburger-link-main-div'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn' onClick={() => this.closeMenu()}><Link className='top-link' to='/writing' onClick={() => this.closeMenu()}>Writing</Link></span>
                  </a>
                  <div className='dropdown-content' id='writing-drop'>
                    <Link className='dropdown-tabs' to='/writingSamples' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Writing</span></Link>
                    <Link className='dropdown-tabs' to='/books' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Books</span></Link>
                    <Link className='dropdown-tabs' to='/magazines' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Magazines</span></Link>
                    {/* <Link className='dropdown-tabs' to='/anthologies' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Anthologies</span></Link> */}
                    <Link className='dropdown-tabs' to='/poems' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Poems</span></Link>
                    {/* <Link className='dropdown-tabs' to='/poemReadings' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Poem Readings</span></Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='section menu-item' id='hamburger-link-main-div'>
              <div className='section__item'>
                <a
                  href='#about-page'
                  className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                >
                  <Link className='dropdown-tabs noDropDown' to='/music' onClick={() => this.closeMenu()}><span className='sm-link__label'>Music</span></Link>
                </a>
              </div>
            </div>
            <div className='section menu-item' id='hamburger-link-main-div'>
              <div className='section__item'>
                <div className='dropdown'>
                  <a
                    href='#about-page'
                    className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                  >
                    <span className='sm-link__label dropbtn' onClick={() => this.closeMenu()}><Link className='top-link' to='/about' onClick={() => this.closeMenu()}>About</Link></span>
                  </a>
                  <div className='dropdown-content' id='writing-drop'>
                    <Link className='dropdown-tabs' to='/aboutAnnabelLee' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Annabel Lee</span></Link>
                    <Link className='dropdown-tabs' to='/aboutVehicleEditions' onClick={() => this.closeMenu()}><span id='drop-link-hover'>Vehicle Editions</span></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='section menu-item' id='hamburger-link-main-div'>
              <div className='section__item'>
                <a
                  href='#contact-page'
                  className='sm-link sm-link_padding-all sm-link1 nav-text-links'
                >
                  <Link className='dropdown-tabs noDropDown' to='/contact' onClick={() => this.closeMenu()}><span className='sm-link__label'>Contact</span></Link>
                </a>
              </div>
            </div>
          </Menu>

          <ul className='nav-bullets-container'>
            <li className='name-link'>
              <div className='section'>
                <div className='section__item name-div'>
                  <a href='#changeMeToARouteLink' id='my-name'>
                    <Link className='home-link' to='/'>
                      <h1 id='annabel-name'>Annabel Lee</h1>
                    </Link>
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <Link className='home-link' to='/'><img src='https://i.imgur.com/kE3ushr.png' ref='' className='home-img' alt='' /></Link>

          <Route path='/' component={HomePage} exact />
          <Route path='/vehicleEditions' component={VehicleEditions} />
          {/* <Route path='/news' component={News} /> */}
          <Route path='/resume' component={Resume} />
          <Route path='/professionalServices' component={ProfessionalServices} />
          <Route path='/writing' component={Writing} />
          <Route path='/musicAndArt' component={MusicAndArt} />
          <Route path='/grantsAndAwards' component={GrantsAndAwards} />
          <Route path='/exhibitions' component={Exhibitions} />
          <Route path='/availableTitles' component={AvailableTitles} />
          <Route path='/outOfPrintTitles' component={OutOfPrintTitles} />
          <Route path='/editorialAndProductionServices' component={EditorialProductionServices} />
          <Route path='/clients' component={Clients} />
          <Route path='/books' component={Books} />
          <Route path='/magazines' component={Magazines} />
          <Route path='/anthologies' component={Anthologies} />
          <Route path='/poems' component={Poems} />
          <Route path='/poemReadings' component={PoemReadings} />
          <Route path='/writingSamples' component={WritingSamples} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/music' component={Music} />
          <Route path='/artWork' component={ArtWork} />
          <Route path='/artExhibits' component={ArtExhibits} />
          <Route path='/activism' component={Activism} />
          <Route path='/about' component={About} />
          <Route path='/aboutAnnabelLee' component={AboutAnnabelLee} />
          <Route path='/aboutVehicleEditions' component={AboutVehicleEditions} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Navbar
