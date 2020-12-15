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
                <div className='question-content'>
                    <div className="question-header">
                        {authedUser === author.id 
                        ? 'You ask:'
                        : `${name} asks:`}
                    </div>

                    <div className='question-body'>
                    <div className="question-image"><img src={avatarURL} alt={author.id}/></div>
                        <div className="question-info">
                            <h5>Would You Rather...</h5>
                            <p className="options">{optionOne.text.substr(0,(optionOne.text.length - 6))}...</p>
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