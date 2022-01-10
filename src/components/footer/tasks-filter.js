import React, { useContext } from 'react';
import './tasks-filter.css';
import Context from '../contex';

function TasksFilter() {
  const { filterTodos, onFilterChange } = useContext(Context);
  const buttonsInfo = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const buttonsRender = buttonsInfo.map(({ name, label }) => {
    const isActive = filterTodos === name;
    const buttonClass = isActive ? 'filter-button--active' : 'filter-button';
    return (
      <li key={name}>
        <button type="button" className={`button-footer ${buttonClass}`} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttonsRender}</ul>;
}

export default TasksFilter;
