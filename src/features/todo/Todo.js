import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

import "./todo.scss"

function Todo() {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo