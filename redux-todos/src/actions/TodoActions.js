import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./types";

export const AddTodo = (todo) => (dispatch, getState) => {
  const {
    TODO: { todos },
  } = getState();
  dispatch({
    type: ADD_TODO,
    payload: [{ id: new Date().getTime(), todo, isComplete: false }, ...todos],
  });
};

export const DeleteTodo = (id) => (dispatch, getState) => {
  const {
    TODO: { todos },
  } = getState();
  console.log(id);
  dispatch({
    type: DELETE_TODO,
    payload: todos.filter((t) => t.id !== id),
  });
};

export const ToggleTodo = (id) => (dispatch, getState) => {
  const {
    TODO: { todos },
  } = getState();
  console.log(todos);
  console.log(id);
  dispatch({
    type: TOGGLE_TODO,
    payload: todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    }),
  });
};
