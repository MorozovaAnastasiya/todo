import React from 'react';
import ReactDom from 'react-dom';

import Context from '../contex';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
  let idCount = 1;
  const [todos, setTodos] = React.useState([
    { description: 'Completed task', completed: false, id: idCount++ },
    { description: 'Editing task', completed: false, id: idCount++ },
    { description: 'Active task', completed: false, id: idCount++ },
  ]);

  const ToggleTodo = (id) => {
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
  let itemsLeft = todos.filter((elem) => elem.completed === false).length;
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm onCreate={addTodo} />
          <TaskList todos={todos} onToggle={ToggleTodo} />
          <Footer itemsLeft={itemsLeft} />
        </section>
      </div>
    </Context.Provider>
  );
};

export default App;
