// get like function/calls from api 
import { saveQuestionAnswer } from '../utils/api'

// action type
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

// action creator - function to call action
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
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

        return saveQuestionAnswer(info)
          .catch((e) => {
              console.warn('Error in handleAddAnswer: ', e)
              dispatch(addAnswer(info))
              alert('There was an error answering the question.  Please try again.')
          })
    }
}