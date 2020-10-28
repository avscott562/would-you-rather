import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogIn from './components/LogIn'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <LogIn />
          <div className="container">
            Test this out
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
