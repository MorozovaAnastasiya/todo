import React, { useContext } from 'react';
import Task from '../task';
import './task-list.css';
import Context from '../contex';

function TaskList() {
  const { visibleItems } = useContext(Context);
  const elements = visibleItems.map((todoItem) => (
      <li className="task-list-item" key={todoItem.id}>
        <Task todo={todoItem} />
      </li>
    ));

  return <ul className="task-list">{elements}</ul>;
}

export default TaskList;
