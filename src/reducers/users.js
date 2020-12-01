// get action type
import { RECEIVE_USERS } from '../actions/users'

// export default the reducer - reducer should be a pure function that takes in a state and action.  This is what modifies the state in the store.
export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        default:
            return state
    }
}