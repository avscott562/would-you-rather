// get action type
import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser'

// export default the reducer - reducer should be a pure function that takes in a state and action.  This is what modifies the state in the store.
export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id

        case REMOVE_AUTHED_USER:
            return action.id

        default:
            return state
    }
}