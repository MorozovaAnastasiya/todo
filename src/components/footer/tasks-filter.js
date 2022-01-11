import React from 'react';
import './tasks-filter.css';

const TasksFilter = () => {
  return (
    <ul className="filters">
      <li>
        <button className="button-footer filter-button">All</button>
      </li>
      <li>
        <button className="button-footer filter-button">Active</button>
      </li>
      <li>
        <button className="button-footer filter-button">Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;
