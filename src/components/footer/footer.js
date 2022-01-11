import React from 'react';
import TasksFilter from './tasks-filter';
import './footer.css';

const Footer = ({ itemsLeft }) => {
  return (
    <footer className="footer">
      <span className="todo-count"> {itemsLeft} items left</span>
      <TasksFilter />
      <button className="button-footer clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
