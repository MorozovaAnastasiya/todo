import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { formatDistanceToNow } from 'date-fns';
import './task.css';
import Context from '../contex';

const Task = ({ todo }) => {
  const { removeTodo, toggleTodo, editDescription, openEditTask } =
    useContext(Context);
  const [taskValue, setTaskValue] = useState(todo.description);
  const checkboxClasses = ['description', 'item-text'];
  const timePassed = formatDistanceToNow(todo.timeToCreate);

  if (todo.completed) {
    checkboxClasses.push('done');
  }

  let inputEditTask;
  let taskDefault;
  let checkbox;
  if (todo.edit) {
    inputEditTask = (
      <input
        className="editTodo"
        type="text"
        value={taskValue}
        onChange={(event) => setTaskValue(event.target.value)}
        onBlur={() => editTask()}
      />
    );
  } else {
    taskDefault = (
      <span className={checkboxClasses.join(' ')}>{todo.description}</span>
    );
    checkbox = <span className="check-custom"></span>;
  }

  const editTask = () => {
    editDescription(taskValue, todo.id);
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
          {checkbox}
          {taskDefault}
          {inputEditTask}
        </label>
      </form>
      <div className="button-group">
        <span className="created">{timePassed}</span>
        <button
          className="icon icon-edit"
          onClick={openEditTask.bind(null, todo.id)}
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
