const initialState = { 
  todos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_TODO":
      return {
              todos:state.todos.concat({id: new Date().getTime() + Math.random(), content: payload, status: false})
             };
    default:
      return state;
  }
};