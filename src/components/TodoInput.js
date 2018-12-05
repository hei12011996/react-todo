import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {
  dispatch = () => {
    this.props.addNewTodo(this.refs.input.value);
    this.refs.input.value = '';
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    dispatch({
      type: "ADD_NEW_TODO",
      payload: newTodo
    });
  }
})

connect(null, mapDispatchToProps)(TodoInput)

export default connect(null, mapDispatchToProps)(TodoInput)