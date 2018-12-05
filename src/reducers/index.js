const initialState = { 
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_TODO":
      return {
                todos:state.todos.concat({id: new Date().getTime() + Math.random(), content: payload, status: false})
             };
    case "TOGGLE_ITEM":
      let newTodos = state.todos.map(item => {
        if (item.id == payload.id){
          return {id: payload.id, content: payload.content, status: payload.status};
        } else {
          return item;
        }
      });
      return { todos: newTodos };
    default:
      return state;
  }
};