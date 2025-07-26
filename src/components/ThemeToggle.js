import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState(false);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/todos"}>Todos</NavLink>
          </li>
        </ul>
        <div className="toggle">
          <button
            className={`indicator ${active ? "active" : ""}`}
            onClick={() => {
              toggleTheme();
              setActive(!active);
            }}
            style={
              active
                ? {
                    background: "#444",
                  }
                : {
                    background: "#eee",
                  }
            }></button>
        </div>
      </nav>
    </header>
  );
}
