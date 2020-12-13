// get action type
import { RECEIVE_USERS, NEW_QUESTION, ADD_ANSWER } from '../actions/users'

// export default the reducer - reducer should be a pure function that takes in a state and action.  This is what modifies the state in the store.
export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case NEW_QUESTION:
            const { user, newId } = action
            return {
                ...state,
                [user]: {
                    ...state[user],
                    questions: state[user].questions.concat([newId])
                }
            }

        case ADD_ANSWER:
            const { qid, answer, authedUser } = action

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

        default:
            return state
    }
}