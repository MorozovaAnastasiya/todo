import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';
import Context from '../contex';

function Task({ todo }) {
  const { removeTodo, toggleTodo, editDescription, openEditTask } = useContext(Context);
  const [taskValue, setTaskValue] = useState(todo.description);
  const checkboxClasses = ['description', 'item-text'];
  const timePassed = formatDistanceToNow(todo.timeToCreate);

  if (todo.completed) {
    checkboxClasses.push('done');
  }

  const editTask = () => {
    editDescription(taskValue, todo.id);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    editTask();
  };

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
    taskDefault = <span className={checkboxClasses.join(' ')}>{todo.description}</span>;
    checkbox = <span className="check-custom" />;
  }

  return (
    <div className="view">
      <form className="taskForm" onSubmit={onSubmit}>
        <label>
          <input className="check" type="checkbox" checked={todo.completed} onChange={toggleTodo.bind(null, todo.id)} />
          {checkbox}
          {taskDefault}
          {inputEditTask}
        </label>
      </form>
      <div className="button-group">
        <span className="created">{timePassed}</span>
        <button label="edit task" className="icon icon-edit" type="button" onClick={openEditTask.bind(null, todo.id)} />
        <button
          label="task delete"
          className="icon icon-destroy"
          type="button"
          onClick={removeTodo.bind(null, todo.id)}
        />
      </div>
    </div>
  );
}

Task.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string,
    timeToCreate: PropTypes.number,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default Task;
