import { useState } from "react";
import "./App.css";
import "./css/todo.css";
import Todo from "./features/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="header">My Personal App</div>
        <div className="sidebar"></div>
        <div className="main-container"></div>
      </div>
      <Todo></Todo>
    </>
  );
}

export default App;
