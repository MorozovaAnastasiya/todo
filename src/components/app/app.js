import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Context from '../contex';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
  let idCount = 1;
  const [todos, setTodos] = useState([
    { description: 'Completed task', completed: false, id: idCount++ },
    { description: 'Editing task', completed: false, id: idCount++ },
    { description: 'Active task', completed: false, id: idCount++ },
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
    setTodos(
      todos.concat([
        {
          description,
          id: idCount++,
          completed: false,
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
      }}
    >
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm onCreate={addTodo} />
          <TaskList />
          <Footer />
        </section>
      </div>
    </Context.Provider>
  );
};

export default App;
