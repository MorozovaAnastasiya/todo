import React from 'react';
import ReactDom from 'react-dom';

import Context from '../contex';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
  const [todos, setTodos] = React.useState([
    { description: 'Completed task', completed: false, id: 1 },
    { description: 'Editing task', completed: false, id: 2 },
    { description: 'Active task', completed: false, id: 3 },
  ]);

  function ToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{removeTodo}}>
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm />
          <TaskList todos={todos} onToggle={ToggleTodo} />
          <Footer />
        </section>
      </div>
    </Context.Provider>
  );
};

export default App;
