import React, { Component } from 'react'
import Navbar from './Navbar'
import ConversationsWithRudy from './ConversationsWithRudy'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Router>
          <Route exact path='/ConversationsWithRudy' component={ConversationsWithRudy} />
        </Router>
      </div>
    )
  }
}

export default App
