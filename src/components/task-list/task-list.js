import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import './task-list.css';

function TaskList({ todos, onToggle, removeTodo, editDescription, openEditTask }) {
  const elements = todos.map((TodoItem) => (
    <li className="task-list-item" key={TodoItem.id}>
      <Task
        todo={TodoItem}
        onToggle={onToggle}
        removeTodo={() => {
          removeTodo(TodoItem.id);
        }}
        editDescription={editDescription}
        openEditTask={() => {
          openEditTask(TodoItem.id);
        }}
      />
    </li>
  ));

  return <ul className="task-list">{elements}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  onToggle: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  openEditTask: PropTypes.func.isRequired,
};

export default TaskList;
