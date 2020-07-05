import React from "react";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../actions";
const Filter = ({ onFilter }) => (
  <select
    name="todos"
    className="filter-todo"
    onChange={(e) => onFilter(e.target.value)}
  >
    <option value={VisibilityFilters.SHOW_ALL}>All</option>
    <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
    <option value={VisibilityFilters.SHOW_UNCOMPLETED}>Uncompleted</option>
  </select>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
