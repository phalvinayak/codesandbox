import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, DeleteTodo, ToggleTodo } from "./actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.TODO);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodo(todo));
    setTodo("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Powered TODO's</h2>
        <form className="todo__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a TODO"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Go</button>
        </form>
        <ul className="todo__list">
          {todos &&
            todos.map((t) => (
              <li
                key={t.id}
                className={t.isComplete ? "todo__single done" : "todo__single"}
              >
                <span className="todo__text">{t.todo}</span>
                <button
                  className="done"
                  onClick={() => {
                    dispatch(ToggleTodo(t.id));
                  }}
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    dispatch(DeleteTodo(t.id));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
