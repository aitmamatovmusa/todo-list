import { useState } from "react"
import "./todoList.scss"

function TodoList() {
  const [newTodo, setNewTodo] = useState()
  const [todoList, setTodoList] = useState([])

  function handleNewTodo(event) {
    setNewTodo({
      value: event.target.value,
      completed: false
    })
  }

  function createNewTodo(event) {
    event.preventDefault()
    setTodoList([...todoList, newTodo])
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

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <form className="todo-form">
        <input type="text" className="todo-input" onChange={handleNewTodo} placeholder="Add new todo" />
        <button onClick={createNewTodo} type="submit" className="todo-btn-add">Add</button>
      </form>
      <ul className="todo-list">
        {
          todoList.map((todo, idx) => {
            return <li
              key={idx}
              className={`todo-item ${todo.completed ? 'line-through text-gray-500' : 'text-black'
                }`}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={todo.completed}
                readOnly
                onClick={() => completeTodo(idx)}
              />
              <span className="todo-text">{todo.value}</span>
            </li>
          })
        }

      </ul>
    </div>
  );
}

export default TodoList