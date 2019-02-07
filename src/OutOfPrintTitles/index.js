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
            <h1 className='unavailable-titles-header-text'>out of pRint titles</h1>
            <img src='https://i.imgur.com/fWykiwt.jpg' className='unavailable-titles-header-photo' />
          </div>

          <div className='unavailable-titles-container'>

            <div className='titles-links-left'>

              <div className='unavailable-titles-divs'>
                <h1 className='titles-name'>Airmail Postcards  -<span className='titles-author-span'>by Franco Beltrametti</span></h1>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/continental34s'>
                  <h1 className='titles-name'>Continental 34s -<span className='titles-author-span'>by Annabel Levitt</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/counting'>
                  <h1 className='titles-name'>Counting -<span className='titles-author-span'>by Jayne Anne Phillips</span></h1>
                </Link>
                <h3 className='titles-cover'>- cover by Rae Berolzheimer</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/fastLanes'>
                  <h1 className='titles-name'>Fast Lanes -<span className='titles-author-span'>by Jayne Anne Phillips</span></h1>
                </Link>
                <h3 className='titles-cover'> - drawings by Yvonne Jacquette</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/giveMeTomorrow'>
                  <h1 className='titles-name'>Give Me Tomorrow -<span className='titles-author-span'>by Carter Ratcliff</span></h1>
                </Link>
                <h3 className='titles-cover'> - illustrations by Alex Katz</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/hotAndCold'>
                  <h1 className='titles-name'>Hot and Cold -<span className='titles-author-span'>by Richard Hell</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/justLetMeDoIt'>
                  <h1 className='titles-name'>Just Let Me Do It -<span className='titles-author-span'>by Michael Lally</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/lightAndShadow'>
                  <h1 className='titles-name'>Light and Shadow -<span className='titles-author-span'>by Simon Schuchat</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/quilts'>
                  <h1 className='titles-name'>Quilts - <span className='titles-author-span'> by Barbara Guest</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <h1 className='titles-name'>Score -<span className='titles-author-span'>by Lazy Madge, Annabel Lee, Douglas Dunn</span></h1>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/smithsonianDepositions'>
                  <h1 className='titles-name'>Smithsonian Depositions and Subject to a Film</h1>
                </Link>
                <h3 className='titles-cover'>- by Clark Coolidge</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/theDayBeforeYesterday'>
                  <h1 className='titles-name'>The Day Before Yesterday -<span className='titles-author-span'>by Leon de Winter</span></h1>
                </Link>
                <h3 className='titles-cover'>- cover by Josje Pollmann</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/theTravelingWoman'>
                  <h1 className='titles-name'>The Traveling Woman -<span className='titles-author-span'>by Roberta Allen</span></h1>
                </Link>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/trainRide'>
                  <h1 className='titles-name'>Train Ride -<span className='titles-author-span'>by Ted Berrigan</span></h1>
                </Link>
                <h3 className='titles-cover'>- cover by Joe Brainard</h3>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <h1 className='titles-name'>Typings -<span className='titles-author-span'>by Christoper Knowles</span></h1>
              </div>
              <img src='https://i.imgur.com/WxOSX5A.png' className='line-img' />

              <div className='unavailable-titles-divs'>
                <Link className='unavailable-titles-links' to='/whenIWasAlive' style={{ color: 'black' }}>
                  <h1 className='titles-name'>When I Was Alive -<span className='titles-author-span'>by Alice Notley</span></h1>
                </Link>
              </div>
            </div>

            <div className='titles-dynamic-info-right'>
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
