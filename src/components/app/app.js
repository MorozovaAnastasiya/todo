import React, { Component } from 'react';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

class App extends Component {
  todoId = 3;

  state = {
    todoData: [
      { description: 'Completed task', completed: false, id: 1 },
      { description: 'Editing task', completed: false, id: 2 },
      { description: 'Active task', completed: false, id: 3 },
    ],
  };

  ToggleTodo = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { todoData: newTodoData };
    });
  };

  removeTodo = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((todo) => todo.id !== id);
      return { todoData: newTodoData };
    });
  };

  addTodo = (description) => {
    this.todoId += 1;
    this.setState(({ todoData }) => {
      const newTodoData = [
        ...todoData,
        {
          description,
          id: this.todoId,
          completed: false,
        },
      ];
      return { todoData: newTodoData };
    });
  };

  render() {
    const { todoData } = this.state;
    const itemsLeft = todoData.filter((elem) => elem.completed === false).length;

    return (
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm onTaskAdded={this.addTodo} />
          <TaskList todos={todoData} onToggle={this.ToggleTodo} removeTodo={this.removeTodo} />
          <Footer onItemsLeft={itemsLeft} />
        </section>
      </div>
    );
  }
}

export default App;
