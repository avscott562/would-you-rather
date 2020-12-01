import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

class LeaderBoard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Leader Board</h1>
                <ul className="leader-list">
                    {this.props.userIds.map((id) => (
                        <li key={id}>
                            <Profile id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        userIds: Object.keys(users).sort()
    }
}

export default connect(mapStateToProps)(LeaderBoard)
