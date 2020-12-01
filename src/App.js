import React, { Component, Fragment } from 'react'

// bring in router functions
import { BrowserRouter as Router, Route } from 'react-router-dom'

// bring in connect so all of the child components can access the state
import { connect } from 'react-redux'

// bring in the shared action that initiates obtaining the initial data
import { handleInitialdata } from './actions/shared'

// bring in components
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import QuestionPage from './components/QuestionPage'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'

// bring in css file
import './css/app.css'



class App extends Component {
  componentDidMount() {
    // must put connect in the export default to access dispatch in props
    this.props.dispatch(handleInitialdata())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <div className="container">
            <Route path='/' exact component={LogIn} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/questions/:id' component={QuestionPage} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

export default connect()(App);
