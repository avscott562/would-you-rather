// get like function/calls from api 
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

// get loading bar actions
import { showLoading, hideLoading } from 'react-redux-loading'

// bring in action creator from user
import { handleAddUserQuestion, handleAddAnswer } from './users'

// action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

// function to add question
function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
// action creator - function to call action to add new question
export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText, 
            optionTwoText, 
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(handleAddUserQuestion(question))
        })
        .then(() => dispatch(hideLoading()))
    }
}


// action creator - function to call action to get all questions
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

// -- TO DO -- function to answer question
function answerQuestion ({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser, 
        qid, 
        answer
    }
}

// -- TO DO -- action creator - function to call action to add answer to question
export function handleAnswerQuestion (info) {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        dispatch(handleAddAnswer(info))

        return saveQuestionAnswer(info)
          .catch((e) => {
              console.warn('Error in handleAnswerQuestion: ', e)
              dispatch(answerQuestion(info))
              dispatch(handleAddAnswer(info))
              alert('There was an error answering the question.  Please try again.')
          })
    }
}