import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './tasks-filter';
import './footer.css';

function Footer({ onItemsLeft }) {
  return (
    <footer className="footer">
      <span className="todo-count"> {onItemsLeft} items left</span>
      <TasksFilter />
      <button type="button" className="button-footer clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  onItemsLeft: PropTypes.number.isRequired,
};

export default Footer;
