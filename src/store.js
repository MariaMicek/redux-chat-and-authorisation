import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import messages, { startListeningToMessagesAsyncActionCreator } from './state/messages'
import auth, { startListeningForUserAsyncActionCreator } from './state/auth'

const rootReducer = combineReducers({
    messages,
    auth,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(startListeningToMessagesAsyncActionCreator())
store.dispatch(startListeningForUserAsyncActionCreator())