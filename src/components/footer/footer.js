import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import TasksFilter from './tasks-filter';
import './footer.css';
import Context from '../contex';

const Footer = () => {
  const { itemsLeft, clearCompleted } = useContext(Context);
  return (
    <footer className="footer">
      <span className="todo-count"> {itemsLeft} items left</span>
      <TasksFilter />
      <button
        className="button-footer clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
