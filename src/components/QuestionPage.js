import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import '../css/question.css'



class QuestionPage extends Component {
    render() {
        console.log(this.props)
        const {
            authedUser,
            answer,
            question: { id, optionOne, optionTwo },
            author,
            author: { name, avatarURL } 
        } = this.props

        return (
            <div className="question">
                <p className="question-header">
                    {authedUser === author.id 
                    ? <span>You ask:</span>
                    : <span>{name} asks:</span>}
                </p>
                <div className="question-body">
                    <section><img src={avatarURL} alt={author.id}/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <form className="options">
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span className={`choice ${answer === 'optionOne' ? 'selected-answer' : ''}`}>
                                        {optionOne.text}
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span className={`choice ${answer === 'optionTwo' ? 'selected-answer' : ''}`}>{optionTwo.text}</span>
                                </label>
                            </p>
                        </form>
                    </section>
                    <button 
                      className='btn' 
                      type='submit'
                      disabled={answer !== null}>
                         Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const author = users[question.author]
    // console.log(users[authedUser])
    const answer = Object.keys(users[authedUser].answers).includes(id) 
      ? users[authedUser].answers[id] : null

    return {
        authedUser,
        answer,
        question,
        author
    }
}

export default connect(mapStateToProps)(QuestionPage)