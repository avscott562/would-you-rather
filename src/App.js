import React, { Component, Fragment } from 'react'

// bring in router functions
import { BrowserRouter as Router, Route } from 'react-router-dom'

// bring in connect so all of the child components can access the state
import { connect } from 'react-redux'

// bring in loading bar
import LoadingBar from 'react-redux-loading'

// bring in the shared action that initiates obtaining the initial data
import { handleInitialdata } from './actions/shared'

// bring in components
import Nav from './components/Nav'
import QuestionPage from './components/QuestionPage'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'

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
          <LoadingBar />
          <Nav />
          <div className="container">
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/questions/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

function mapStateToProps({ users }) {
  return {
      loading: users = []
  }
}

export default connect(mapStateToProps)(App);
