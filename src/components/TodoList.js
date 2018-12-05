import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.props.addNewTodo}/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    dispatch({
      type: "ADD_NEW_TODO",
      payload: newTodo
    });
  }
})

connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)