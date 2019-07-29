import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'

import Continental34s from '../Continental34s'
import Counting from '../Counting'
import FastLanes from '../FastLanes'
import GiveMeTomorrow from '../GiveMeTomorrow'
import HotAndCold from '../HotAndCold'
import JustLetMeDoIt from '../JustLetMeDoIt'
import LightAndShadow from '../LightAndShadow'
import Quilts from '../Quilts'
import SmithsonianDepositions from '../SmithsonianDepositions'
import TheDayBeforeYesterday from '../TheDayBeforeYesterday'
import TheTravelingWoman from '../TheTravelingWoman'
import TrainRide from '../TrainRide'
import WhenIWasAlive from '../WhenIWasAlive'

class OutOfPrintTitles extends Component {
  render () {
    return (
      <Router className='outOfPrintTitles-component'>
        <div>
          <div className='no-print-header'>
            <h1 className='unavailable-titles-header-text'>Out of Print Titles</h1>
            <img src='https://i.imgur.com/1KMe3ta.png' className='unavailable-titles-car-photo' alt='' />
          </div>

          <div className='unavailable-titles-container'>
            <div className='unavailable-titles-left-container'>
              {/* <h1 className='title-text-header'>Titles</h1> */}
              <div className='titles-links-left-1'>
                <div className='unavailable-titles-divs'>
                  <h1 className='titles-name' id='no-link'>Airmail Postcards <span className='titles-author-span'>by Franco Beltrametti</span></h1>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/continental34s'>
                    <h1 className='titles-name'>Continental 34s<span className='titles-author-span' id='titles-author-span-id'>by Annabel Levitt</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/hotAndCold'>
                    <h1 className='titles-name'>Hot and Cold<span className='titles-author-span' id='titles-author-span-id' >by Richard Hell</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/justLetMeDoIt'>
                    <h1 className='titles-name'>Just Let Me Do It<span className='titles-author-span' id='titles-author-span-id' >by Michael Lally</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/lightAndShadow'>
                    <h1 className='titles-name'>Light and Shadow<span className='titles-author-span' id='titles-author-span-id' >by Simon Schuchat</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/quilts'>
                    <h1 className='titles-name'>Quilts<span className='titles-author-span' id='titles-author-span-id' > by Barbara Guest</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <h1 className='titles-name-score'>Score<span className='titles-author-span' id='titles-author-span-id' >by Lazy Madge, Annabel Lee, Douglas Dunn</span></h1>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/theTravelingWoman'>
                    <h1 className='titles-name'>The Traveling Woman<span className='titles-author-span' id='titles-author-span-id' >by Roberta Allen</span></h1>
                  </Link>
                </div>

                <div className='unavailable-titles-divs'>
                  <h1 className='titles-name-typings'>Typings<span className='titles-author-span' id='titles-author-span-id' >by Christoper Knowles</span></h1>
                </div>
                <div className='unavailable-titles-divs last-titles-divs'>
                  <Link className='unavailable-titles-links' to='/whenIWasAlive' style={{ color: 'black', marginBottom: '7px' }}>
                    <h1 className='titles-name'>When I Was Alive<span className='titles-author-span' id='titles-author-span-id' >by Alice Notley</span></h1>
                  </Link>
                </div>
              </div>

              <div className='titles-links-left-2'>
                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/smithsonianDepositions'>
                    <h1 className='titles-name smithsonian-name'>Smithsonian Depositions and Subject to a Film</h1>
                  </Link>
                  <h3 className='titles-cover smithsonian-cover'>by Clark Coolidge</h3>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/theDayBeforeYesterday'>
                    <h1 className='titles-name'>The Day Before Yesterday</h1>
                  </Link>
                  <h3 className='titles-cover the-day-before-cover'>by Leon de Winter // cover by Josje Pollmann</h3>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/counting'>
                    <h1 className='titles-name'>Counting</h1>
                  </Link>
                  <h3 className='titles-cover counting-cover'>by Jayne Anne Phillips // cover by Rae Berolzheimer</h3>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/fastLanes'>
                    <h1 className='titles-name'>Fast Lanes</h1>
                  </Link>
                  <h3 className='titles-cover fast-lanes-cover'>by Jayne Anne Phillips // drawings by Yvonne Jacquette</h3>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/giveMeTomorrow'>
                    <h1 className='titles-name'>Give Me Tomorrow</h1>
                  </Link>
                  <h3 className='titles-cover give-me-tomorrow-cover'>by Carter Ratcliff // illustrations by Alex Katz</h3>
                </div>

                <div className='unavailable-titles-divs'>
                  <Link className='unavailable-titles-links' to='/trainRide'>
                    <h1 className='titles-name'>Train Ride</h1>
                  </Link>
                  <h3 className='titles-cover train-ride-cover'>by Ted Berrigan // cover by Joe Brainard</h3>
                </div>

              </div>
            </div>
            <div className='titles-dynamic-info-right'>
              <h1 className='dynamic-info-title-text'>Title Information</h1>
              <Route path='/continental34s' component={Continental34s} />
              <Route path='/fastLanes' component={FastLanes} />
              <Route path='/counting' component={Counting} />
              <Route path='/giveMeTomorrow' component={GiveMeTomorrow} />
              <Route path='/hotAndCold' component={HotAndCold} />
              <Route path='/justLetMeDoIt' component={JustLetMeDoIt} />
              <Route path='/lightAndShadow' component={LightAndShadow} />
              <Route path='/quilts' component={Quilts} />
              <Route path='/smithsonianDepositions' component={SmithsonianDepositions} />
              <Route path='/theDayBeforeYesterday' component={TheDayBeforeYesterday} />
              <Route path='/theTravelingWoman' component={TheTravelingWoman} />
              <Route path='/trainRide' component={TrainRide} />
              <Route path='/whenIWasAlive' component={WhenIWasAlive} />
            </div>

          </div>

        </div>
      </Router>
    )
  }
}

export default OutOfPrintTitles

