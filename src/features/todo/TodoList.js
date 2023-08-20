import { useDispatch, useSelector } from "react-redux"
import { completeTodo, deleteTodo } from "./todoSlice"

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todos)

  function handleCompleteTodo(idx) {
    dispatch(completeTodo(idx))
  }

  function handleDeleteTodo(idx) {
    dispatch(deleteTodo(idx))
  }

  return (
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
  )
}

export default TodoList