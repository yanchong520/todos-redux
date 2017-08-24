import { combineReducers } from 'redux'
import todos from './TodoReducers'

const rootReducer = combineReducers({
  todos
})

export default rootReducer