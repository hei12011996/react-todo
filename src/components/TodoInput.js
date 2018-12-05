import React, { Component } from 'react'
import { connect } from "react-redux";

export default class TodoInput extends Component {
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