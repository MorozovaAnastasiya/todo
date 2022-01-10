import React, { useContext, useState } from 'react';
import './new-task-form.css';
import Context from '../contex';

function NewTaskForm() {
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
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}
export default NewTaskForm;
