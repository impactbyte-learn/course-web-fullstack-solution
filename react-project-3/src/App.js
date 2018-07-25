import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Redux Todo App</h1>
        <button onClick={() => this.props.addTodo("Hello")}>Add Todo</button>
        <ul>
          {this.props.todo.map((item, i) => (
            <li key={i}>
              <button onClick={() => this.props.deleteTodo(i)}>X</button>
              <button
                onClick={() => {
                  const ask = prompt("EDIT");
                  this.props.editTodo(i, ask);
                }}
              >
                EDIT
              </button>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    todo: state
  }),
  dispatch => ({
    addTodo: todo => dispatch({ type: "ADD_TODO", payload: todo }),
    deleteTodo: id => dispatch({ type: "DELETE_TODO", payload: id }),
    editTodo: (id, todo) =>
      dispatch({ type: "EDIT_TODO", payload: { id, todo } })
  })
)(App);
