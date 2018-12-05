import React, { Component } from 'react'
import Todo from "./Todo.js";
import { connect } from "react-redux";

class Todos extends Component {

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => <Todo todo={todo}/> )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(Todos)

export default connect(mapStateToProps)(Todos)