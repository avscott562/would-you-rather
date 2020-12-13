// get api call to get data stored on database initial load
import { getInitialData } from '../utils/api'

// import action creators from action files
import { receiveUsers, handleAddAnswer } from './users'
import { receiveQuestions, handleAnswerQuestion } from './questions'
import { setCurrentUser } from './authedUser'

// -- TO DO -- need to set this by the selection on the log in page
// const authedId = 'sarahedo'

// action creator - get inital data stored on database - will need to use redux-thunk middleware because we are returning a function from this action
export function handleInitialdata () {
    return (dispatch) => {
        return getInitialData()
          .then(({ users, questions }) => {
              dispatch(receiveUsers(users))
              dispatch(receiveQuestions(questions))
              dispatch(setCurrentUser(null))
          })
    }
}

export function handleAnswer(info) {
    return (dispatch) => {
        dispatch(handleAnswerQuestion(info))
        dispatch(handleAddAnswer(info))
    }
}