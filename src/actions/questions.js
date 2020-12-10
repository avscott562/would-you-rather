// get like function/calls from api 
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

// action type
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
//need action type to answer question

// function to add question
function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
// -- TO DO -- action creator - function to call action to add new question
export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            optionOneText, 
            optionTwoText, 
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
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
// -- TO DO -- action creator - function to call action to add answer to question