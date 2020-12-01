// purpose, tell us what has been dispatched and what the state is after is has been dispatched
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
        const returnValue = next(action)
        console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger