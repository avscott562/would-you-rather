import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <h1>Leader Board</h1>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
        )
    }
}

// export default connect()(LeaderBoard)
export default LeaderBoard
