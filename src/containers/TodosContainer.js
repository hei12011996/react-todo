import React, { Component } from 'react'
import Todos from "../components/Todos.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  initialDataLoad: dotos => {
    dispatch({
      type: "INITIAL_DATA_LOAD",
      payload: dotos
    });
  }
});

connect(mapStateToProps, mapDispatchToProps)(Todos)

export default connect(mapStateToProps, mapDispatchToProps)(Todos)