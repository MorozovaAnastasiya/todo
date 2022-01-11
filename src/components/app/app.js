import React, { Component } from 'react';
import './app.css';
import Title from '../title';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

class App extends Component {
  idCount = 1;
  state = {
    todoData: [
      { description: 'Completed task', completed: false, id: this.idCount++ },
      { description: 'Editing task', completed: false, id: this.idCount++ },
      { description: 'Active task', completed: false, id: this.idCount++ },
    ],
  };
  itemsLeft = this.state.todoData.filter((elem) => elem.completed === false)
    .length;

  ToggleTodo = (id) => {
    this.setState(({ todoData }) => {
      return todoData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //нельзя потому что мы меняем существующий массив!
        }
        return todo;
      });
    });
  };

  removeTodo = (id) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((todo) => todo.id !== id);
      return { todoData: newArr };
    });
  };

  addTodo = (description) => {
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        {
          description,
          id: this.idCount++,
          completed: false,
        },
      ];
      return { todoData: newArr };
    });
  };

  render() {
    return (
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm onCreate={this.addTodo} />
          <TaskList
            todos={this.state.todoData}
            onToggle={this.ToggleTodo}
            removeTodo={this.removeTodo}
          />
          <Footer itemsLeft={this.itemsLeft} />
        </section>
      </div>
    );
  }
}

export default App;
