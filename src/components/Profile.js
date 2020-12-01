import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/profile.css'
import 'materialize-css';

class Profile extends Component {
    render() {
        const { user } = this. props

        const {
            id,
            name,
            avatarURL,
            answers,
            questions
        } = user

        const questionQty = questions.length
        const answerQty = Object.keys(answers).length
        const totalScore = questionQty + answerQty

        return (
            <div className="profile">
               <section className="user-photo">
                    <img className="user-photo" src={avatarURL} alt={`Avatar of ${name}`} />
               </section>
               <section className="user-bio">
                   <p className="user-name">{name}</p>
                   <p className="user-asked">{`questions asked: ${questionQty}`}</p>
                   <p className="user-answered">{`questions answered: ${answerQty}`}</p>
               </section>
               <section className="user-score">
                   <p>Total Score</p>
                   <p>{totalScore}</p>
               </section>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }, { id }) {
    const user = users[id]

    return {
        authedUser,
        user
    }
}

export default connect(mapStateToProps)(Profile)