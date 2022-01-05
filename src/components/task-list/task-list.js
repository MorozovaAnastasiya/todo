import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import Task from '../task';
import './task-list.css';
import Context from '../contex';

const TaskList = () => {
  const { visibleItems } = useContext(Context);
  const elements = visibleItems.map((todoItem) => {
    return (
      <li className="task-list-item" key={todoItem.id}>
        <Task todo={todoItem} />
      </li>
    );
  });

  return <ul className="task-list">{elements}</ul>;
};

export default TaskList;
