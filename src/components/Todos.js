import React, { Component } from 'react'
import Todo from "./Todo.js";

export default class Todos extends Component {

  componentWillMount() {
    fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {
          method: 'GET',
          mode: 'cors'})
    .then(res => res.json())
    .then(res => this.props.initialDataLoad(res._embedded.todos));
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => <Todo todo={todo}/> )}
      </div>
    )
  }
}