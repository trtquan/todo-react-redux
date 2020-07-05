const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            text: action.text,
            completed: false,
            removed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map((todo, index) =>
          (index === action.index)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'PREPARE_REMOVE':
        return state.map((todo, index) =>
          (index === action.index)
            ? {...todo, removed: true}
            : todo
        )
      case 'REMOVE_TODO':
        return state.filter(todo => !todo.removed)
      default:
        return state
    }
  }
  
  export default todos


  // store ram to sto