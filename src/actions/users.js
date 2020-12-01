// action type
export const RECEIVE_USERS = 'RECEIVE_USERS'

// action creator - function to call action
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}