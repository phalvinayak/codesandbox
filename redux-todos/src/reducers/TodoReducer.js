import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        todos: action.payload,
      };
    case TOGGLE_TODO:
      return {
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default TodoReducer;
