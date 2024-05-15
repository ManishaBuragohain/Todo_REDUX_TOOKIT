import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleComplete } from "../store/Slice";
import "./todolist.css";
const TodoLists = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };
  return (
    <div className="todo-list">
      {todoList.map((todo) => (
        <div
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          key={todo.id}
        >
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span>{todo.content}</span>
            {todo.completed && (
              <span className="completed-text">Completed</span>
            )}
          </div>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default TodoLists;
