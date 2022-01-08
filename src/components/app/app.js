import React, { useState } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Context from '../contex';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
  const [todoId, setTodoId] = useState(4);
  const [todos, setTodos] = useState([
    {
      description: 'Completed task',
      timeToCreate: Date.now(),
      completed: false,
      id: 1,
    },
    {
      description: 'Editing task',
      timeToCreate: Date.now(),
      completed: false,
      id: 2,
    },
    {
      description: 'Active task',
      timeToCreate: Date.now(),
      completed: false,
      id: 3,
    },
  ]);
  const [filterTodos, setFilterTodos] = useState(
    'all' //all, active, completed
  );

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (description) => {
    setTodoId(todoId + 1);
    setTodos(
      todos.concat([
        {
          description,
          id: todoId,
          completed: false,
          timeToCreate: Date.now(),
        },
      ])
    );
  };

  const showFilterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  };

  const onFilterChange = (filter) => {
    setFilterTodos(filter);
  };

  let itemsLeft = todos.filter((elem) => elem.completed === false).length;
  const visibleItems = showFilterItems(todos, filterTodos);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <Context.Provider
      value={{
        visibleItems,
        filterTodos,
        itemsLeft,
        toggleTodo,
        removeTodo,
        onFilterChange,
        clearCompleted,
        addTodo,
      }}
    >
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm />
          <TaskList />
          <Footer />
        </section>
      </div>
    </Context.Provider>
  );
};

App.propTypes = {
  todoId: PropTypes.number,
  todos: PropTypes.arrayOf(PropTypes.object),
  filterTodos: PropTypes.string,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  addTodo: PropTypes.func,
  showFilterItems: PropTypes.func,
  onFilterChange: PropTypes.func,
  itemsLeft: PropTypes.number,
  visibleItems: PropTypes.arrayOf(PropTypes.object),
  clearCompleted: PropTypes.func,
};

export default App;
