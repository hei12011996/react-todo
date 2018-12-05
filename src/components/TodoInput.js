import React, { Component } from 'react'
import { connect } from "react-redux";

export default class TodoInput extends Component {
  dispatch = () => {
    this.props.addNewTodo(this.refs.input.value);
    this.refs.input.value = '';
  }

  filter = () => {
    let isFilterActive = this.refs.filterByActive.checked;
    this.props.updateFilter(isFilterActive);
    this.props.filterByActive(isFilterActive);
  }

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.dispatch}>add</button>
        <span>Active Items</span><input type="checkbox" ref="filterByActive" onChange={this.filter}/>
      </div>
    )
  }
}