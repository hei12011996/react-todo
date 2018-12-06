import Todo from '../components/Todo.js'
import { connect } from "react-redux";
import TodosResource from "../resources/TodosResource"

const mapStateToProps = state => ({
  isFilterActive: state.isFilterActive
})

const mapDispatchToProps = dispatch => ({
  toggleItem: dotoItem => {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: dotoItem
    });
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
});

connect(mapStateToProps, mapDispatchToProps)(Todo)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)