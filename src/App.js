import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./action";
import "./todo.css";

const App = () => {
  const todos = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    newTodo.trim() !== "" && dispatch(addTodo({ text: newTodo }));
    setNewTodo("");
  };

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleEditTodo = () => {
    if (editId !== null && editText.trim() !== "") {
      dispatch(editTodo(editId, editText));
      setEditId(null);
      setEditText(""); 
    }
  };

  const handleStartEdit = (todoId, currentText) => {
    setEditId(todoId);
    setEditText(currentText);
  };

  return (
    <div className="container">
      <h1>Redux Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-text-input"
        />
        <button onClick={handleAddTodo} className="todo-button">
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleEditTodo} className="edit-button">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <button
                  onClick={() => handleRemoveTodo(todo.id)}
                  className="todo-button"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleStartEdit(todo.id, todo.text)}
                  className="todo-button"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
