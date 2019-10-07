import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'


const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  })
  

const store = createStore(reducer, applyMiddleware(thunk))

export default store
