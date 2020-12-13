// bring in combineReducers from the redux package
import { combineReducers } from 'redux'

// bring in loading bar from react-redux-loading package
import { loadingBarReducer } from 'react-redux-loading'

// import reducers from other files
import users from './users'
import questions from './questions'
import authedUser from './authedUser'

// combine all of the reducers to one reducer because the createStore function can only take one reducer
export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})