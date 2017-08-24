import Counter from '../Counter';
import Immutable from 'immutable';
import Todo from '../Todo';
const initialState = []

 const todos = (state = initialState, action)=> {
  switch (action.type) {
    case 'ADD_TODO':
       const id = Counter.increment();
      return [
        {
         // id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
         id: id,
          completed: false,
          text: action.text
        },
        ...state,
      ]
    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case 'COMPLETE_ALL':
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case 'CLEAR_COMPLETED':
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}


export default todos;