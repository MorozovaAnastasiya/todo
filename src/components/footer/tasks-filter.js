import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import './tasks-filter.css';
import Context from '../contex';

const TasksFilter = () => {
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
        <button
          className={`button-footer ${buttonClass}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttonsRender}</ul>;
};

export default TasksFilter;
