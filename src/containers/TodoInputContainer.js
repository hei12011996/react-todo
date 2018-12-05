import TodoInput from "../components/TodoInput";
import { connect } from "react-redux";

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