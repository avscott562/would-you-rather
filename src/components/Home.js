import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogIn from './LogIn'
import Dashboard from './Dashboard'

class Home extends Component {
    render() {
        const { authedUser } = this.props

        return (
            <div>
                {authedUser === null || authedUser === undefined
                ? <div><LogIn /></div>
                : <div><Dashboard /></div>}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Home)