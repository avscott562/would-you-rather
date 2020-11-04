import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import QuestionPage from './components/QuestionPage'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            <div>
              <Route path='/' exact component={LogIn} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
