import "./index.scss";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [todo, settodo] = useState(JSON.parse(localStorage.getItem("todo")) || [])
  const [inputValue, setInputvalue] = useState("")
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  const submit = (e) => {
    e.preventDefault()
    if (todo !== "") {
      settodo([...todo, { id: Date.now(), text: inputValue }]);
      setInputvalue("")
    }
  };
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const deleteTask = (id) => {
    settodo(todo.filter((task) => task.id !== id));
  }
  return (
    <div id="todo">
      <form action="" onSubmit={submit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={submit}>Add Task</button>
      </form>
      <ul className="list">
        {todo.map((task) => (
          <div>
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)} className="deleteBtn">
                Delete btn
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
