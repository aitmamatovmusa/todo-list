import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      console.log(action)
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer