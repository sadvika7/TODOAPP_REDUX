import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./action";

const initialState = {
  items: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, { id: Date.now(), text: action.payload.text }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
