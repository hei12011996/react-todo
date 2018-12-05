import Todo from '../components/Todo.js'
import { connect } from "react-redux";

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