import Todo from '../components/Todo.js'
import { connect } from "react-redux";

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
});

connect(mapStateToProps, mapDispatchToProps)(Todo)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)