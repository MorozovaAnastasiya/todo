import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './TasksFilter.css';

class TasksFilter extends Component {
  buttonsInfo = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  onFilterChange = (filterName) => {
    const { filterChange } = this.props;
    filterChange(filterName);
  };

  render() {
    const { filter } = this.props;

    const buttonsRender = this.buttonsInfo.map(({ name, label }) => {
      const isActive = filter === name;
      const buttonClass = cn('button-footer', {
        'filter-button--active': isActive,
        'filter-button': !isActive,
      });

      return (
        <li key={name}>
          <button
            type="button"
            className={buttonClass}
            onClick={() => {
              this.onFilterChange(name);
            }}
          >
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttonsRender}</ul>;
  }
}

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default TasksFilter;
