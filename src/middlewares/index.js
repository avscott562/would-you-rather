// bring in thunk middleware - Each thing returned by an action creator - be it an action or a function - will go through our thunk middleware.
import thunk from 'redux-thunk'

// bring in logger middleware
import logger from './logger'

// bring in applyMiddlware function from redux
import { applyMiddleware } from 'redux'

// export default is evoking the middleware
export default applyMiddleware(
    thunk,
    logger
)