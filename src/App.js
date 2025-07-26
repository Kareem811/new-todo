import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./pages/Todos";
import About from "./pages/About";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="app">
          <ThemeToggle />
          <Routes>
            <Route path="/todos" element={<Todos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
