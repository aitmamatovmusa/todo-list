import { useState } from "react"
import "./todoForm.scss"
import { addTodo, completeTodo, deleteTodo } from "./todoSlice"
import { useDispatch, useSelector } from "react-redux"

function TodoForm() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todos)

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

  function handleCompleteTodo(idx) {
    dispatch(completeTodo(idx))
  }

  function handleDeleteTodo(idx) {
    dispatch(deleteTodo(idx))
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <form className="todo-form">
        <input
          type="text" className="todo-input"
          onChange={handleNewTodo} placeholder="Add new todo"
          value={newTodo.value}
        />
        <button onClick={createNewTodo} type="submit" className="todo-btn-add">Add</button>
      </form>
      <ul className="todo-list">
        {
          todos.map((todo, idx) => {
            return <li
              key={idx}
              className="todo-item"
            >
              <div className={todo.completed ? 'todo-completed' : ''}>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={todo.completed}
                  readOnly
                  onClick={() => handleCompleteTodo(idx)}
                />
                <span className="todo-text">{todo.value}</span>
              </div>
              <button
                className="todo-btn-delete"
                onClick={() => handleDeleteTodo(idx)}
              >
                Delete
              </button>
            </li>
          })
        }

      </ul>
    </div>
  );
}

export default TodoForm