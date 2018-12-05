import React, { Component } from 'react'
import { connect } from "react-redux";

class Todo extends Component {

  toggleItem = () => {
    const originTodo = this.props.todo;
    this.props.toggleItem({ id: originTodo.id, content: originTodo.content, status: !originTodo.status});
  }

  render() {
    console.log("XXX");
    let todoItem;
    if (!this.props.todo.status) {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} >{this.props.todo.content}</li>
    } else {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} ><s>{this.props.todo.content}</s></li>
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