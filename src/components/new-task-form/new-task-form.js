import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import './new-task-form.css';
import PropTypes from 'prop-types';
import Context from '../contex';

const NewTaskForm = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(Context);

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      addTodo(value);
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

NewTaskForm.propTypes = {
  addTodo: PropTypes.func,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default NewTaskForm;
