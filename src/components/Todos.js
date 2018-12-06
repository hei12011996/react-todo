import React, { Component } from 'react'
import TodoContainer from "../containers/TodoContainer.js";
import TodosResource from "../resources/TodosResource"

export default class Todos extends Component {

  componentWillMount() {
    TodosResource.getAll()
    .then(res => res.json())
    .then(res => this.props.initialDataLoad(res._embedded.todos));
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => <TodoContainer todo={todo}/> )}
      </div>
    )
  }
}