import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tasks-filter.css';

class TasksFilter extends Component {
  static defaultProps = {
    filter: 'all',
    filterChange: () => {},
  };

  static propTypes = {
    filter: PropTypes.string,
    filterChange: PropTypes.func,
  };

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
      const buttonClass = isActive ? 'filter-button--active' : 'filter-button';

      return (
        <li key={name}>
          <button
            type="button"
            className={`button-footer ${buttonClass}`}
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

export default TasksFilter;
