import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import NewQuestion from './components/NewQuestion'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
