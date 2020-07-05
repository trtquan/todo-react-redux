import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilterLink from '../containers/FilterLink'
import VisibleTodoList from '../containers/VisibleTodoList'

 const App = () => (
  <div>
    <div className="action-bar">
    <AddTodo />
    <FilterLink />
    </div>
    <VisibleTodoList />
  </div>
)
export default App