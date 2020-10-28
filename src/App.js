import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import NewQuestion from './components/NewQuestion'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className="container">
            <NewQuestion />
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
