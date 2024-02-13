import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    /* toggleDone: (state, action) => {
      state.list = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    }, */

    /* toggleDone: (state, action) => {
      state.list = state.list.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.list[index].done = !state.list[index].done;
      }
    }, */

    toggleDone: (state, action) => {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;
