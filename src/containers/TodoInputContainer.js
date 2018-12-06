import TodoInput from "../components/TodoInput";
import { connect } from "react-redux";
import TodosResource from "../resources/TodosResource"

const mapStateToProps = state => ({
  isFilterActive: state.isFilterActive
})

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => {
    TodosResource.add({content: newTodo, status: 'active'})
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
    let status = checked === true ? 'active' : 'active,completed';
    TodosResource.getByStatus(status)
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