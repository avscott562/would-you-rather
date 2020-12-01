// action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// action creator - function to call action
export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}