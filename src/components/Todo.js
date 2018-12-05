import React, { Component } from 'react'

export default class Todo extends Component {

  toggleItem = () => {
    const originTodo = this.props.todo;
    fetch("http://localhost:8080/api/todos/" + originTodo.id, {
        method: 'PATCH', 
        headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors',
          body: JSON.stringify({status: originTodo.status === 'active'? 'completed': 'active'})})
    .then(res => res.json())
    .then(res => {
        this.props.toggleItem(res);
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