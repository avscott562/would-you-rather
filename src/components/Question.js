import React, { Component } from 'react'
import { Link, withRouter } from'react-router-dom'
import { connect } from 'react-redux'
import '../css/question.css'
import 'materialize-css'

class Question extends Component {
    render() {
        console.log(this.props)
        const { 
            authedUser, 
            question: { id, optionOne },
            author, 
            author: { name, avatarURL } 
        } = this.props

        return (
            <div className="question">
                <p className="question-header">{name} asks:</p>
                <div className="question-body">
                    <section className="img-section"><img src={avatarURL} alt={author.id}/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <p className="options">{optionOne.text.substr(0,(optionOne.text.length - 6))}...</p>
                    </section>
                   <Link to={`/questions/${id}`}><p className='btn' type='submit'>See more...</p></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const question = questions[id]
    const author = users[question.author]
    return {
        authedUser,
        question,
        author
    }
}

export default connect(mapStateToProps)(Question)