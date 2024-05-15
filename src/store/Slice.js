import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      {
        id: 1,
        content: "cricket",
        completed: false,
      },

      {
        id: 2,
        content: "eat food",
        completed: false,
      },
    ],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift({
        id: state.todoList.length + 1,
        content: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleComplete: (state, action) => {
        const todo = state.todoList.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
  },
});

export const { addTodo, removeTodo , toggleComplete} = Slice.actions;
export default Slice.reducer;
