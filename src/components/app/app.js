import React, { useState } from 'react';
import Context from '../contex';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

function App() {
  const [todoId, setTodoId] = useState(4);
  const [todos, setTodos] = useState([
    {
      description: 'Completed task',
      timeToCreate: Date.now(),
      completed: false,
      edit: false,
      id: 1,
    },
    {
      description: 'Editing task',
      timeToCreate: Date.now(),
      completed: false,
      edit: false,
      id: 2,
    },
    {
      description: 'Active task',
      timeToCreate: Date.now(),
      completed: false,
      edit: false,
      id: 3,
    },
  ]);
  const [filterTodos, setFilterTodos] = useState(
    'all' // all, active, completed
  );

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    console.log(newTodos);
    setTodos(
      newTodos.map((todo) => {
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
          edit: false,
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

  const itemsLeft = todos.filter((elem) => elem.completed === false).length;
  const visibleItems = showFilterItems(todos, filterTodos);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  const editDescription = (newDescription, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.description = newDescription;
          todo.edit = false;
        }
        return todo;
      })
    );
  };

  const openEditTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.edit = true;
        }
        return todo;
      })
    );
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
        editDescription,
        openEditTask,
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
}

export default App;
