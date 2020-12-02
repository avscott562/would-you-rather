import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/profile.css'
import 'materialize-css';

class Profile extends Component {
    render() {
        const { user, score, asked, answered } = this.props

        const {
            name,
            avatarURL
        } = user

        return (
            <div className="profile">
               <section className="user-photo">
                    <img className="user-photo" src={avatarURL} alt={`Avatar of ${name}`} />
               </section>
               <section className="user-bio">
                   <p className="user-name">{name}</p>
                   <p className="user-asked">{`questions asked: ${asked}`}</p>
                   <p className="user-answered">{`questions answered: ${answered}`}</p>
               </section>
               <section className="user-score">
                   <p>Total Score</p>
                   <p>{score}</p>
               </section>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }, { id, score, asked, answered }) {
    const user = users[id]

    return {
        authedUser,
        user,
        score,
        asked,
        answered
    }
}

export default connect(mapStateToProps)(Profile)