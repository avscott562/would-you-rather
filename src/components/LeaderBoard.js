import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

class LeaderBoard extends Component {
    render() {
        console.log(this.props)
        this.props.sortedUsers.map(user => console.log(user.id, user.score))
        return (
            <div>
                <h1>Leader Board</h1>
                <ul className="leader-list">
                    {this.props.sortedUsers.map((user) => (
                        <li key={user.id}>
                            <Profile id={user.id} score={user.score} asked={user.asked} answered={user.answered} />
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
            asked,
            answered,
            score: asked + answered
        }
    })

    const sortedUsers = usersTotals.sort((a,b) => b.score - a.score)
    const userIds = sortedUsers.map(user => user.id)

    return {
        sortedUsers
    }
}

export default connect(mapStateToProps)(LeaderBoard)
