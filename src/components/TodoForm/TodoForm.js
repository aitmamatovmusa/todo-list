import { useState } from "react"
import "./todoForm.scss"

function TodoForm() {
  const [newTodo, setNewTodo] = useState({
    value: "",
    completed: false
  })
  const [todoList, setTodoList] = useState([])

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
      setTodoList([...todoList, newTodo])
      setNewTodo({ ...newTodo, value: "" })
    }
  }

  function completeTodo(idx) {
    const todos = todoList.map((todo, todoIdx) => {
      if (todoIdx === idx) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })

    setTodoList(todos)
  }

  function deleteTodo(idx) {
    const filteredTodoList = todoList.filter((_, todoIdx) => todoIdx !== idx)
    setTodoList(filteredTodoList)
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
          todoList.map((todo, idx) => {
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
                  onClick={() => completeTodo(idx)}
                />
                <span className="todo-text">{todo.value}</span>
              </div>
              <button
                className="todo-btn-delete"
                onClick={() => deleteTodo(idx)}
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