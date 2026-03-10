import { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import "../css/todo.css";
import todos from "../json/todos.json";

import { appDataDir } from "@tauri-apps/api/path";

function Todo() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(todos.todos);
  const [latestId, setLatestId] = useState(todos.latest_id);

  useEffect(() => {
    async function init() {
      const dir = await appDataDir();
      console.log(dir);
    }

    init();
  }, []);

  function addTask() {
    if (newTask === "") return;
    setTasks([...tasks, { id: latestId, text: newTask, completed: false }]);
    setLatestId(latestId + 1);
    setNewTask("");
    console.log(tasks);
  }

  const deleteTask = (id: number | string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completeTodo = (id: number | string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  };

  return (
    <>
      <div className="todo-container">
        <input
          type="text"
          name="add-todo-input"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button className="add-todo todo-item" onClick={addTask}>
          Add +
        </button>
        <span className="line"></span>
        {tasks
          .filter((item) => !item.completed)
          .map((item) => (
            <div className="todo-item" key={item.id}>
              <button
                type="button"
                className="todo-complete-todo"
                onClick={() => completeTodo(item.id)}
                aria-label={`Mark "${item.text}" as complete`}
              ></button>
              <div className="todo-item-text">{item.text}</div>

              <button
                type="button"
                className="todo-item-delete"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        <div>Completed Tasks</div>
        <span className="line"></span>
        {tasks
          .filter((item) => item.completed)
          .map((item) => (
            <div className="todo-item" key={item.id}>
              <div className="todo-item-text">{item.text}</div>

              <button
                type="button"
                className="todo-item-delete"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo;
