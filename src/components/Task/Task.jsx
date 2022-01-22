import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {
  state = {
    taskValue: '',
  };

  componentDidMount() {
    const { todo } = this.props;
    this.setState({ taskValue: todo.description });
  }

  editTask = () => {
    const { todo, editDescription } = this.props;
    const { taskValue } = this.state;
    editDescription(taskValue, todo.id);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.editTask();
  };

  isEditTask = () => {
    const { todo, openEditTask } = this.props;
    if (!todo.completed) {
      openEditTask(todo.id);
    }
  };

  render() {
    const { todo, toggleTodo, removeTodo } = this.props;
    const timePassed = formatDistanceToNow(todo.timeToCreate);
    const { taskValue } = this.state;
    const checkboxClasses = cn('description', 'item-text', {
      done: todo.completed,
    });

    let inputEditTask;
    let taskDefault;
    let checkbox;
    if (todo.edit && !todo.completed) {
      inputEditTask = (
        <input
          className="editTodo"
          autoFocus // eslint-disable-line
          type="text"
          value={taskValue}
          onChange={(event) => this.setState({ taskValue: event.target.value })}
          onBlur={() => this.editTask()}
        />
      );
    } else {
      taskDefault = <span className={checkboxClasses}>{todo.description}</span>;
      checkbox = <span className="check-custom" />;
    }

    return (
      <div className="view">
        <form className="taskForm" onSubmit={this.onSubmit}>
          <label>
            <input
              className="check"
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
            {checkbox}
            {taskDefault}
            {inputEditTask}
          </label>
        </form>
        <div className="button-group">
          <span className="created">{timePassed}</span>
          <button label="edit task" className="icon icon-edit" type="button" onClick={this.isEditTask} />
          <button label="task delete" className="icon icon-destroy" type="button" onClick={removeTodo} />
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string,
    timeToCreate: PropTypes.number,
    completed: PropTypes.bool,
    edit: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  openEditTask: PropTypes.func.isRequired,
};

export default Task;
