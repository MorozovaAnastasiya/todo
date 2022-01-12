import React, { Component } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  static defaultProps = {
    onTaskAdded: () => {},
  };

  static propTypes = {
    onTaskAdded: PropTypes.func,
  };

  state = {
    value: '',
  };

  onSubmit = (event) => {
    const { onTaskAdded } = this.props;
    const { value } = this.state;

    event.preventDefault();

    if (value.trim()) {
      onTaskAdded(value);
      this.setState({
        value: '',
      });
    }
  };

  onTaskChange = (event) => {
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
          onChange={this.onTaskChange}
        />
      </form>
    );
  }
}

export default NewTaskForm;
