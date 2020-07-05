import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) return;
          dispatch(addTodo((input.value)));
          input.value = "";
        }}
      >
        <input
          ref={(node) => (input = node)}
          type="text"
          className="todo-input"
          maxLength="40"
        />
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default connect()(AddTodo)
