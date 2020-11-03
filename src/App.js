import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import Question from './components/Question'
import NewQuestion from './components/NewQuestion'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className="container">
            <Question />
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
