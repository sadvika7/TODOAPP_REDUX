// action.js
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId,
});

export const editTodo = (todoId, newText) => ({
  type: EDIT_TODO,
  payload: { id: todoId, text: newText },
});
