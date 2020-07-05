import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, removeTodo, prepareRemove }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          onToggle={() => toggleTodo(index)}
          onPrepareRemove={() => prepareRemove(index)}
          onRemoveTodo={() => removeTodo(index)}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      removed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  prepareRemove: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
