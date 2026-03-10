import { useState } from "react";
import "./App.css";
import "./index.css";
import "./css/todo.css";
import Home from "./features/home";
import Journal from "./features/journal";
import Todo from "./features/Todo";
import Sidebar from "./features/sidebar";

export type View = "home" | "tasks" | "journal";

function App() {
  const [activeView, setActiveView] = useState<View>("home");

  function renderActiveView() {
    switch (activeView) {
      case "home":
        return <Home />;
      case "tasks":
        return <Todo />;
      case "journal":
        return <Journal />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="container">
      <h2 className="header">Hu Tao Tracker App</h2>
      <div className="sidebar">
        <Sidebar activeView={activeView} onSelect={setActiveView} />
      </div>
      <div className="main-container">{renderActiveView()}</div>
    </div>
  );
}

export default App;
