import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

export default function Todos() {
  const [text, setText] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  const handleDelete = (id) => {
    removeTodo(id);
  };
  return (
    <>
      .
      <div className="todos-container">
        <div className="todos-content">
          <h2>Todos</h2>
          <button onClick={handleAdd}>Add</button>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" />
        </div>
        {/* <ul> */}
        <table>
          <thead>
            <tr key="head">
              <th>#</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((t) => (
              // <TodoItem key={t.id} todo={t} />
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.text}</td>
                <td>{t.done ? "Done" : "In Progress"}</td>
                <td className="flex">
                  {!t.done && (
                    <button className="toggle-button" onClick={() => toggleTodo(t.id)}>
                      Done
                    </button>
                  )}
                  <button onClick={() => handleDelete(t.id)}>Delete Todo</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </ul> */}
      </div>
    </>
  );
}
