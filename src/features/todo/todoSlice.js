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
      const todoId = action.payload
      state.todos = state.todos.filter((_, idx) => idx !== todoId)
    },
    completeTodo: (state, action) => {
      const todoId = action.payload

      state.todos = state.todos.map((todo, idx) =>
        todoId === idx
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    }
  }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions
export default todoSlice.reducer