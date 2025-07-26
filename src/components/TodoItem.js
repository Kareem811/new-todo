import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}
