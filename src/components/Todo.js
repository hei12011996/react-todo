import React, { Component } from 'react'
import TodosResource from "../resources/TodosResource"

export default class Todo extends Component {

  toggleItem = () => {
    const id = this.props.todo.id;
    const newStatus = this.props.todo.status === 'active'? 'completed': 'active';
    TodosResource.updateStatus(id, newStatus)
    .then(res => res.json())
    .then(res => {
        this.props.toggleItem(res);
        this.props.filterByActive(this.props.isFilterActive);
      }
    );
  }

  render() {
    return (
      <ul>
        <li id={this.props.todo.id} onClick={this.toggleItem} style={{textDecoration: this.props.todo.status === 'completed'? 'line-through' : 'none'}}>{this.props.todo.content}</li>
      </ul>
    )
  }
}