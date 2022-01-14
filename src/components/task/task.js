import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css';

class Task extends Component {
  state = {
    taskValue: '',
  };

  checkboxClasses = ['description', 'item-text'];

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

  render() {
    const { todo, onToggle, removeTodo, openEditTask } = this.props;
    const timePassed = formatDistanceToNow(todo.timeToCreate);
    const { taskValue } = this.state;

    if (todo.completed) {
      this.checkboxClasses.push('done');
    } else if (!todo.completed && this.checkboxClasses.includes('done')) {
      this.checkboxClasses.pop();
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
          onChange={(event) => this.setState({ taskValue: event.target.value })}
          onBlur={() => this.editTask()}
        />
      );
    } else {
      taskDefault = <span className={this.checkboxClasses.join(' ')}>{todo.description}</span>;
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
                onToggle(todo.id);
              }}
            />
            {checkbox}
            {taskDefault}
            {inputEditTask}
          </label>
        </form>
        <div className="button-group">
          <span className="created">{timePassed}</span>
          <button label="edit task" className="icon icon-edit" type="button" onClick={openEditTask} />
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
  onToggle: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  openEditTask: PropTypes.func.isRequired,
};

export default Task;
