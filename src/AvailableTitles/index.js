import React, { Component } from 'react'
import ABookOfSigns from '../ABookOfSigns'
import ConversationsWithRudy from '../ConversationsWithRudy'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'

class AvailableTitles extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className=''>
            <Link className='book-of-signs-link' to='/bookOfSigns'>
              <h1 id='name'>A Book of Signs</h1>
              {/* img of a book of signs (make it the link) */}
            </Link>
            <Link className='rudy-conversations-link' to='/conversationsWithRudy'>
              <h1 id='name'>Conversations with Rudy Burckhardt About Everything</h1>
              {/* img of a book of signs (make it the link) */}
            </Link>
          </div>

          <Route path='/bookOfSigns' component={ABookOfSigns} />
          <Route path='/conversationsWithRudy' component={ConversationsWithRudy} />
        </div>
      </Router>
    )
  }
}

export default AvailableTitles
