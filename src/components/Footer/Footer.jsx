import React from 'react';
import PropTypes from 'prop-types';
import {TasksFilter} from './components/TasksFilter';
import './Footer.css';

export  const Footer = ({ itemsLeft, filter, filterChange, clearCompleted }) => (
  <footer className="footer">
    <span className="todo-count"> {itemsLeft} items left</span>
    <TasksFilter filter={filter} filterChange={filterChange} />
    <button type="button" className="button-footer clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.propTypes = {
  itemsLeft: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

