// get action type
import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

// export default the reducer - reducer should be a pure function that takes in a state and action.  This is what modifies the state in the store.
export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }

        default:
            return state
    }
}