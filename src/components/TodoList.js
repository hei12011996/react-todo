import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "ADD_NEW_TODO",
      payload: newTodo
    });
  }
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(TodoList)

export default connect(mapStateToProps)(TodoList)