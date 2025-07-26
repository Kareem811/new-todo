import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem("todos") || "[]");

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((t) => t.id !== action.payload);
    case "TOGGLE":
      return state.map((t) => (t.id === action.payload ? { ...t, done: !t.done } : t));
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    dispatch({ type: "ADD", payload: { id: Date.now(), text, done: false } });
  };

  const removeTodo = (id) => dispatch({ type: "REMOVE", payload: id });
  const toggleTodo = (id) => dispatch({ type: "TOGGLE", payload: id });

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>{children}</TodoContext.Provider>;
}

export const useTodos = () => useContext(TodoContext);
