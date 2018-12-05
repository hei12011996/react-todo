import React, { Component } from 'react'
import TodoInputContainer from '../containers/TodoInputContainer'
import TodosContainer from '../containers/TodosContainer'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInputContainer />
        <TodosContainer />
      </div>
    )
  }
}