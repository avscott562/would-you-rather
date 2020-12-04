// action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
// -- TODO -- may need action to get authed user
// -- TODO -- may need action to remove authed user

// action creator - function to call action to set authed user
function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

// action creator - set authed user from login screen
export function setCurrentUser (id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    }
}