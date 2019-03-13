import React, { Component } from 'react'
import Navbar from './Navbar'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
      </div>
    )
  }
}

export default App


//   <Router>
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/code" component={Code} />
//       <Route exact path="/contact" component={Contact} />
//       <Route exact path="/presence" component={info} />
//     </div>
//   </div>
// </Router>
