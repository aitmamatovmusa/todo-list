import { useState } from "react"
import { useDispatch } from "react-redux"

import { addTodo } from "./todoSlice"

function TodoForm() {
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState({
    value: "",
    completed: false
  })

  function handleNewTodo(event) {
    setNewTodo({
      ...newTodo,
      value: event.target.value,
    })
  }

  function createNewTodo(event) {
    event.preventDefault()

    const newTodoValue = newTodo.value.trim()
    if (newTodoValue) {
      dispatch(addTodo(newTodo))
      setNewTodo({ value: "", completed: false })
    }
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        onChange={handleNewTodo}
        placeholder="Add new todo"
        value={newTodo.value}
      />
      <button
        onClick={createNewTodo}
        type="submit"
        className="todo-btn-add"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm