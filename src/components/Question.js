import React, { Component } from 'react'
import { Link } from'react-router-dom'
import { connect } from 'react-redux'
import '../css/question.css'
import 'materialize-css'

class Question extends Component {
    render() {
        console.log(this.props)
        const { 
            authedUser,
            question, 
            question: { id, optionOne },
            author, 
            author: { name, avatarURL } 
        } = this.props

        if (question === null) {
            return <p>This question doesn't exist.</p>
        }

        return (
            <div className="question">
                <div className='question-content'>
                    <div className="question-header">
                        {authedUser === author.id 
                        ? 'You ask:'
                        : `${name} asks:`}
                    </div>

                    <div className='question-body'>
                    <div className="question-image"><img src={avatarURL} alt={author.id}/></div>
                        <div className="question-info">
                            <p>Would You Rather...</p>
                            <div className="options">
                                {optionOne.text.length > 6 
                                  ? optionOne.text.substr(0,(optionOne.text.length - 6)) 
                                  : optionOne.text}...
                            </div>
                        </div>
                        <Link to={`/questions/${id}`}><p className='btn' type='submit'>See more...</p></Link>
                    </div>
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