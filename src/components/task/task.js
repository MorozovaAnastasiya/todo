import React from 'react';
import './task.css';

const Task = ({ todo, onToggle, removeTodo }) => {
  const classes = ['description', 'item-text'];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <div className="view">
      <label className="label">
        <input
          className="check"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="check-custom"></span>
        <span className={classes.join(' ')}>{todo.description}</span>
      </label>
      <div className="button-group">
        <span className="created">created 17 seconds ago</span>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => removeTodo(todo.id)}
        ></button>
      </div>
    </div>
  );
};

export default Task;
