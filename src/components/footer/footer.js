import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './tasks-filter';
import './footer.css';

function Footer({ onItemsLeft, filter, filterChange, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count"> {onItemsLeft} items left</span>
      <TasksFilter filter={filter} filterChange={filterChange} />
      <button type="button" className="button-footer clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  filterChange: () => {},
  clearCompleted: () => {},
};

Footer.propTypes = {
  onItemsLeft: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
