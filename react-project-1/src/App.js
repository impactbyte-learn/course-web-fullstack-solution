import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      todo: ['Todo 1', 'Todo 2', 'Todo 3']
    }
    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  // Function for handle the input field
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  // Function for add the todo
  addTodo() {
    this.setState((prev) => ({
      todo: prev.todo.concat(prev.input) // Add todo
    }))
  }

  // Function for delete todo
  deleteTodo(i) {
    this.setState((prev) => {
      // Create new array based on this.state.todo
      let newTodo = prev.todo.slice()
      // Delete the todo
      newTodo.splice(i, 1)
      // Return new todo
      return {
        todo: newTodo
      }
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {/* Loop the todos */}
          {this.state.todo.map((item, i) => (
            <li key={i}>
              <button onClick={() => this.deleteTodo(i)}>X</button> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
