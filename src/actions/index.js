export const addTodo = text => ({
  type: 'ADD_TODO',
  text
})

export const prepareRemove = index => ({
  type: 'PREPARE_REMOVE',
  index
})

export const removeTodo = index => ({
  type: 'REMOVE_TODO',
  index
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = index => ({
  type: 'TOGGLE_TODO',
  index
})

export const saveToLocal = () => ({
  type: 'SAVE_TO_LOCAL',
})

export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_COMPLETED: 'completed',
  SHOW_UNCOMPLETED: 'uncompleted'
}