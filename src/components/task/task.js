import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import Context from '../contex';

const Task = ({ todo }) => {
  const { removeTodo, toggleTodo } = useContext(Context);
  const classes = ['description', 'item-text'];

  if (todo.completed) {
    classes.push('done');
  }

  const timePassed = formatDistanceToNow(todo.timeToCreate);  //дата обновляется только в момент изенений! это норм или нет

  return (
    <div className="view">
      <label className="label">
        <input
          className="check"
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo.bind(null, todo.id)}
        />
        <span className="check-custom"></span>
        <span className={classes.join(' ')}>
          {todo.description}
        </span>
      </label>
      <div className="button-group">
        <span className="created">{timePassed}</span>
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
