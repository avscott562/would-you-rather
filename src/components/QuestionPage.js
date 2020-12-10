import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import '../css/question.css'



class QuestionPage extends Component {
    render() {
        console.log(this.props)
        const {
            currentUser,
            question: { id, optionOne, optionTwo },
            author,
            author: { name, avatarURL } 
        } = this.props

        return (
            <div className="question">
                <p className="question-header">{name} asks:</p>
                <div className="question-body">
                    <section><img src={avatarURL} alt={author.id}/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <form className="options">
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span>{optionOne.text}</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span>{optionTwo.text}</span>
                                </label>
                            </p>
                        </form>
                    </section>
                   <button className='btn' type='submit'>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params
    const currentUser = users[authedUser]
    const question = questions[id]
    const author = users[question.author]

    return {
        currentUser,
        question,
        author
    }
}

export default connect(mapStateToProps)(QuestionPage)