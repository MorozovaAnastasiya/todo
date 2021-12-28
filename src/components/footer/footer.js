import React from 'react';
import ReactDom from 'react-dom';
import TasksFilter from './tasks-filter';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter />
      <button className="button-footer clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
