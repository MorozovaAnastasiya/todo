import React, { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  state = {
    value: '',
  };

  onSubmit = (event) => {
    const { addTodo } = this.props;
    const { value } = this.state;

    event.preventDefault();

    if (value.trim()) {
      addTodo(value);
      this.setState({
        value: '',
      });
    }
  };

  taskChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-task-form"
          placeholder="What needs to be done?"
          value={value}
          onChange={this.taskChange}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default NewTaskForm;
