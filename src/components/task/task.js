import React, { useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import Context from '../contex';

const Task = ({ todo }) => {
  const { removeTodo, toggleTodo, editDescription } = useContext(Context);
  const [spanClasses, setSpanClasses] = useState(['description', 'item-text']);
  const [editClasses, setEditClasses] = useState(['editTodo', 'hidden']);
  const [taskValue, setTaskValue] = useState(todo.description);
  const [checkCustomClasses, setCheckCustomClasses] = useState([
    'check-custom',
  ]);

  if (todo.completed) {
    // setSpanClasses([...spanClasses, 'done']);
  }

  const timePassed = formatDistanceToNow(todo.timeToCreate);

  const editTask = () => {
    editDescription(taskValue, todo.id);
    setSpanClasses(['description', 'item-text']);
    setEditClasses(['editTodo', 'hidden']);
    setCheckCustomClasses(['check-custom']);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    editTask();
  };

  return (
    <div className="view">
      <form className="taskForm" onSubmit={onSubmit}>
        <label className="label">
          <input
            className="check"
            type="checkbox"
            checked={todo.completed}
            onChange={toggleTodo.bind(null, todo.id)}
          />
          <span className={checkCustomClasses.join(' ')}></span>
          <span className={spanClasses.join(' ')}>{todo.description}</span>

          <input
            className={editClasses.join(' ')}
            type="text"
            value={taskValue}
            onChange={(event) => setTaskValue(event.target.value)}
            onBlur={() => editTask()}
          />
        </label>
      </form>
      <div className="button-group">
        <span className="created">{timePassed}</span>
        <button
          className="icon icon-edit"
          onClick={() => {
            setSpanClasses([...spanClasses, 'hidden']);
            setEditClasses(['editTodo']);
            setCheckCustomClasses(['check-custom', 'hidden']);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={removeTodo.bind(null, todo.id)}
        ></button>
      </div>
    </div>
  );
};

export default Task;
