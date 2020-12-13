import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import { handleAnswerQuestion } from '../actions/questions'


class QuestionPage extends Component {
    state = {
        selectedAnswer: ''
    }

    handleChange = (e) => {
        this.setState(() => ({
            selectedAnswer: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props

        dispatch(handleAnswerQuestion({
            authedUser, 
            qid: question.id, 
            answer: this.state.selectedAnswer
        }))

        this.setState(() => ({
            selectedAnswer: ''
        }))
    }

    render() {
        console.log(this.props)
        const {
            authedUser,
            answer,
            question: { optionOne, optionTwo },
            author: { id, name, avatarURL } 
        } = this.props

        // calculate the votes
        const optOneVotes = optionOne.votes.length
        const optTwoVotes = optionTwo.votes.length
        const totalVotes = optOneVotes + optTwoVotes
        const voteOnePct = (optOneVotes/totalVotes) * 100
        const voteTwoPct = (optTwoVotes/totalVotes) * 100

        return (
            <div className="question">
                <p className="question-header">
                    {authedUser === id 
                    ? <span>You ask:</span>
                    : <span>{name} asks:</span>}
                </p>
                <div className="question-body">
                    <section><img src={avatarURL} alt={id}/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <form className="options">
                            <p>
                                <label>
                                    <input 
                                      name="options" 
                                      type="radio" 
                                      value="optionOne" 
                                      onChange={this.handleChange}
                                      disabled={answer !== null}
                                      checked={this.state.selectedAnswer === 'optionOne'}
                                    />
                                    <span className={`choice ${answer === 'optionOne' ? 'selected-answer' : ''}`}>
                                        {optionOne.text}
                                    </span>
                                </label>
                                {answer !== null && (
                                    <div>
                                        <p>{voteOnePct}% of people prefer this option</p>
                                        <p>{optOneVotes} out of {totalVotes}</p>
                                    </div>
                                )}
                            </p>
                            <p>
                                <label>
                                    <input 
                                      name="options" 
                                      type="radio" 
                                      value="optionTwo"
                                      onChange={this.handleChange}
                                      disabled={answer !== null}
                                      checked={this.state.selectedAnswer === 'optionTwo'} 
                                    />
                                    <span className={`choice ${answer === 'optionTwo' ? 'selected-answer' : ''}`}>
                                        {optionTwo.text}
                                    </span>
                                </label>
                                {answer !== null && (
                                    <div>
                                        <p>{voteTwoPct}% of people prefer this option</p>
                                        <p>{optTwoVotes} out of {totalVotes}</p>
                                    </div>
                                )}
                            </p>
                        </form>
                    </section>
                    <button 
                      className='btn' 
                      type='submit'
                      disabled={answer !== null}
                      onClick={this.handleSubmit}>
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