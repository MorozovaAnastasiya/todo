import React from 'react';
import Task from '../task';
import './task-list.css';

const TaskList = (props) => {

  const elements = props.todos.map((TodoItem) => {
    return (
      
      <li className="task-list-item" key={TodoItem.id}>
        <Task
          todo={TodoItem}
          onToggle={props.onToggle}
          removeTodo={props.removeTodo}
        />
      </li>
    );
  });

  return <ul className="task-list">{elements}</ul>;
};

export default TaskList;
