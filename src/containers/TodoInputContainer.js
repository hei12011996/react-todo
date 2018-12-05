import TodoInput from "../components/TodoInput";
import { connect } from "react-redux";

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
  }
})

connect(null, mapDispatchToProps)(TodoInput)

export default connect(null, mapDispatchToProps)(TodoInput)