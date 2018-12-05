import React, { Component } from 'react'
import { connect } from "react-redux";

class Todo extends Component {

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
    let todoItem;
    if (this.props.todo.status === 'active') {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} >{this.props.todo.content}</li>
    } else {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} style={{textDecoration: 'line-through'}}>{this.props.todo.content}</li>
    }
    return (
      <div>
        {todoItem}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleItem: dotoItem => {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: dotoItem
    });
  }
});

connect(null, mapDispatchToProps)(Todo)

export default connect(null, mapDispatchToProps)(Todo)