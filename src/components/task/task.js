import React, { useContext } from 'react';
import ReactDom from 'react-dom';

import './task.css';
import Context from '../contex';

const Task = ({ todo, onChange }) => {
  const { removeTodo } = useContext(Context);
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
          onChange={() => onChange(todo.id)}
        />
        <span className="check-custom"></span>
        <span className={classes.join(' ')}>{todo.description}</span>
      </label>
      <div className="button-group">
        <span className="created">created 17 seconds ago</span>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={removeTodo.bind(null, todo.id)}
        ></button>
      </div>
    </div>
  );
};

export default Task;
