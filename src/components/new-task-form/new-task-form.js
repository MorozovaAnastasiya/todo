import React, { useState } from 'react';
import './new-task-form.css';

const NewTaskForm = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="new-task-form"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </form>
  );
};

export default NewTaskForm;
