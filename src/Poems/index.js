import React, { Component } from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LearningToListenPoem from '../LearningToListenPoem'
import TranscedentalSplatterPoem from '../TranscedentalSplatterPoem'
import WinterPoem from '../WinterPoem'

class Poems extends Component {
  render () {
    return (
      <Router>
        <div className='poems-main-container'>
          <div className='poems-title-div'>
            <h1 className='poems-main-title'>Poems</h1>
            <img src='https://i.imgur.com/gZBy00w.png' className='car-photo-poems' alt='' />
          </div>
          {/* THIS SHOULD BE LINKS TO NEW PAGES FOR EACH POEM SO THAT THERE IS ROOM. DO NOT DO ROUTES, JUST <a> TAGS */}
          <div className='poems-info-main-div'>
            <div className='poems-links-container'>
              <Link className='poems-links' to='/LearningToListenPoem'><span className='titles-of-poems-text'>Learning To Listen</span></Link>
              <Link className='poems-links' to='/TranscedentalSplatterPoem'><span className='titles-of-poems-text'>Transcedental Splatter</span></Link>
              <Link className='poems-links' to='/WinterPoem'><span className='titles-of-poems-text'>Winter Poem</span></Link>
            </div>
            <div className='poems-dynamic-container'>
              <Route path='/LearningToListenPoem' component={LearningToListenPoem} />
              <Route path='/TranscedentalSplatterPoem' component={TranscedentalSplatterPoem} />
              <Route path='/WinterPoem' component={WinterPoem} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Poems
