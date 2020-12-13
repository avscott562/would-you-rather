// get like function/calls from api 
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

// action type
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const NEW_QUESTION = 'NEW_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

// action creator - function to call action
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

// function to add new question to user profile
function addUserQuestion ({ author, id }) {
    return {
        type: NEW_QUESTION,
        user: author,
        newId: id
    }
}

// action creator to call function to add new question to user profile
export function handleAddUserQuestion (question) {
    return (dispatch) => {
        return dispatch(addUserQuestion(question))
    }
}

// function to add answer to user profile
function addAnswer ({ authedUser, qid, answer }) {
    return {
        type: ADD_ANSWER,
        authedUser, 
        qid, 
        answer
    }
}

// action creator - function to call action to add answer to user profile
export function handleAddAnswer (info) {
    return (dispatch) => {
        dispatch(addAnswer(info))
    }
}