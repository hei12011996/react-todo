const initialState = { 
  todos: [],
  isFilterActive: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "INITIAL_DATA_LOAD":
      return { ...state, todos: payload };

    case "UPDATE_FILTER":
      return { ...state, isFilterActive: payload };

    case "ADD_NEW_TODO":
      return { ...state, todos: state.todos.concat(payload) };

    case "TOGGLE_ITEM":
      let newTodos = state.todos.map(item => {
        if (item.id === payload.id){
          return payload;
        } else {
          return item;
        }
      });
      return { ...state, todos: newTodos };

    default:
      return state;
  }
};