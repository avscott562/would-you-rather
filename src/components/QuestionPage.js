import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import { handleAnswerQuestion } from '../actions/questions'


class QuestionPage extends Component {
    state = {
        answer: ''
    }

    handleChange = (e) => {
        this.setState(() => ({
            answer: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, question, authedUser } = this.props

        dispatch(handleAnswerQuestion({
            authedUser, 
            qid: question.id, 
            answer: this.state.answer
        }))

        this.setState(() => ({
            answer: ''
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
                                      checked={this.state.answer === 'optionOne'}
                                    />
                                    <span className={`choice ${answer === 'optionOne' ? 'selected-answer' : ''}`}>
                                        {optionOne.text}
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input 
                                      name="options" 
                                      type="radio" 
                                      value="optionTwo"
                                      onChange={this.handleChange}
                                      checked={this.state.answer === 'optionTwo'} 
                                    />
                                    <span className={`choice ${answer === 'optionTwo' ? 'selected-answer' : ''}`}>
                                        {optionTwo.text}
                                    </span>
                                </label>
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