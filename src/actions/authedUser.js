// action types
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

// function to set authed user
export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

// action creator - function to call action to set authed user
// export function setCurrentUser (id) {
//     return (dispatch) => {
//         dispatch(setAuthedUser(id))
//     }
// }

// function to get authed user
function getAuthedUser () {
    return {
        type: GET_AUTHED_USER
    }
}

// action creator - function to call action to get authed user
export function getCurrentUser () {
    return (getState) => {
        const { authedUser } = getState()

        return authedUser
    }
}

// function to remove authed user
function removeAuthedUser () {
    return {
        type: REMOVE_AUTHED_USER,
        id: null
    }
}

// action creator - function to call action to remove authed user
export function removeCurrentUser () {
    return (dispatch) => {
        dispatch(removeAuthedUser())
    }
}