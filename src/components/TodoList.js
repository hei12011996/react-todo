import React, { Component } from 'react'
import TodoInputContainer from '../containers/TodoInputContainer'
import Todos from './Todos'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInputContainer />
        <Todos />
      </div>
    )
  }
}