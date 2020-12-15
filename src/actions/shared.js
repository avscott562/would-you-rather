// get api call to get data stored on database initial load
import { getInitialData } from '../utils/api'

// get action creators for loading bar from react-redux-loading
import { showLoading, hideLoading } from 'react-redux-loading'

// import action creators from action files
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setCurrentUser } from './authedUser'

// action creator - get inital data stored on database - will need to use redux-thunk middleware because we are returning a function from this action
export function handleInitialdata () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
          .then(({ users, questions }) => {
              dispatch(receiveUsers(users))
              dispatch(receiveQuestions(questions))
              dispatch(setCurrentUser(null))
              dispatch(hideLoading())
          })
    }
}

// action creator to call functions to add a new question
// export function handleNewQuestion(optionOneText, optionTwoText) {
//     return (dispatch, getState) => {
//         const { authedUser } = getState()

//         return dispatch(handleAddQuestion(
//             optionOneText,
//             optionTwoText,
//             authedUser
//         ))
//     }
// }

// action creator to call functions to add selected answer
// export function handleAnswer(info) {
//     return (dispatch) => {
//         dispatch(handleAnswerQuestion(info))
//         dispatch(handleAddAnswer(info))
//     }
// }