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
    const usersTotals = Object.entries(users).map((user) => {
        const asked = user[1].questions.length
        const answered = Object.keys(user[1].answers).length

        return {
            id: user[1].id,
            score: asked + answered
        }
    })

    const sortedUsers = usersTotals.sort((a,b) => b.score - a.score)
    const userIds = sortedUsers.map(user => user.id)

    return {
        userIds,
        sortedUsers
    }
}

export default connect(mapStateToProps)(LeaderBoard)
