import React, { Component } from 'react'
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          if (!todo.status) {
            return <li key={todo.id} >{todo.content}</li>
          } else {
            return <li key={todo.id} ><s>{todo.content}</s></li>
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(Todos)

export default connect(mapStateToProps)(Todos)