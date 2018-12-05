import TodoInput from "../components/TodoInput";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isFilterActive: state.isFilterActive
})

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    fetch("http://localhost:8080/api/todos", {
        method: 'POST', 
        headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors',
          body: JSON.stringify({content: newTodo, status: 'active'})})
    .then(res => res.json())
    .then(res => {
        dispatch({
          type: "ADD_NEW_TODO",
          payload: res
        })
      }
    );
  },

  updateFilter: (checked) => {
    dispatch({
      type: "UPDATE_FILTER",
      payload: checked
    })
  },

  filterByActive: (checked) => {
    let url = checked === true ? '' : ',completed';
    fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active" + url , {
          method: 'GET',
          mode: 'cors'})
    .then(res => res.json())
    .then(res => 
        dispatch({
          type: "INITIAL_DATA_LOAD",
          payload: res._embedded.todos
        })
    );
  }
})

connect(mapStateToProps, mapDispatchToProps)(TodoInput)

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)