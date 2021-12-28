import React from 'react';
import ReactDom from 'react-dom';
import './new-task-form.css';

const NewTaskForm = () => {
  return (
    <input
      type="text"
      className="new-task-form"
      placeholder="What needs to be done?"
      autoFocus
    ></input>
  );
};

export default NewTaskForm;
