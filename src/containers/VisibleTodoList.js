import { connect } from "react-redux";
import {
  toggleTodo,
  VisibilityFilters,
  removeTodo,
  prepareRemove,
} from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_UNCOMPLETED:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo   : (index) => dispatch(toggleTodo(index)),
  prepareRemove: (index) => dispatch(prepareRemove(index)),
  removeTodo   : (index) => dispatch(removeTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
