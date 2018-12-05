const initialState = { 
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "INITIAL_DATA_LOAD":
      return { todos: payload };

    case "ADD_NEW_TODO":
      return { todos: state.todos.concat(payload) };

    case "TOGGLE_ITEM":
      let newTodos = state.todos.map(item => {
        if (item.id === payload.id){
          return payload;
        } else {
          return item;
        }
      });
      return { todos: newTodos };

    default:
      return state;
  }
};