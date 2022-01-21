import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, toggleTodo, removeTodo, editDescription, openEditTask }) => {
  
  const elements = todos.map((todoItem) => (
    <li className="task-list-item" key={todoItem.id}>
      <Task
        todo={todoItem}
        toggleTodo={toggleTodo}
        removeTodo={() => {
          removeTodo(todoItem.id);
        }}
        editDescription={editDescription}
        openEditTask={() => {
          openEditTask(todoItem.id);
        }}
      />
    </li>
  ));

  return <ul className="task-list">{elements}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.shape({
    description: PropTypes.string,
    timeToCreate: PropTypes.number,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    id: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  openEditTask: PropTypes.func.isRequired,
};

export default TaskList;
