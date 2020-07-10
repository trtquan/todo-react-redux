import React from "react";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../actions";
const Filter = ({ setVisibilityFilter }) => (
  <select
    name="todos"
    className="filter-todo"
    onChange={(e) => setVisibilityFilter(e.target.value)}
  >
    <option value={VisibilityFilters.SHOW_ALL}>All</option>
    <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
    <option value={VisibilityFilters.SHOW_UNCOMPLETED}>Uncompleted</option>
  </select>
);

Filter.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default Filter;
