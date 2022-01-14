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
      { description: 'Completed task', timeToCreate: Date.now(), completed: false, edit: false, id: 1 },
      { description: 'Editing task', timeToCreate: Date.now(), completed: false, edit: false, id: 2 },
      { description: 'Active task', timeToCreate: Date.now(), completed: false, edit: false, id: 3 },
    ],
    filterTasks: 'all',
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
          timeToCreate: Date.now(),
          completed: false,
          edit: false,
          id: this.todoId,
        },
      ];
      return { todoData: newTodoData };
    });
  };

  showFilterTasks = (items, filter) => {
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

  filterChange = (filterName) => {
    this.setState({ filterTasks: filterName });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((elem) => !elem.completed);

      return {
        todoData: newTodoData,
      };
    });
  };

  openEditTask = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, edit: true };
        }
        return todo;
      });
      return { todoData: newTodoData };
    });
  };

  editDescription = (newDescription, id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, description: newDescription, edit: false };
        }
        return todo;
      });
      return { todoData: newTodoData };
    });
  };

  render() {
    const { todoData } = this.state;
    const { filterTasks } = this.state;
    const itemsLeft = todoData.filter((elem) => elem.completed === false).length;
    const visibleItems = this.showFilterTasks(todoData, filterTasks);

    return (
      <div className="app-wrapper">
        <Title />
        <section className="main">
          <NewTaskForm onTaskAdded={this.addTodo} />
          <TaskList
            todos={visibleItems}
            onToggle={this.ToggleTodo}
            removeTodo={this.removeTodo}
            editDescription={this.editDescription}
            openEditTask={this.openEditTask}
          />
          <Footer
            onItemsLeft={itemsLeft}
            filter={filterTasks}
            filterChange={this.filterChange}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </div>
    );
  }
}

export default App;
