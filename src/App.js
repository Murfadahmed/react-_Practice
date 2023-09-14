import { useState } from "react";
import "./App.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  async function getThougts() {
    // fetch api from advice
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((C) => C + 1);

    // fetch api from todos
    const toddApi = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoData = await toddApi.json();
    // const random = ((Math.random() + 1) * 2).toFixed(0);
    // console.log(random);

    // console.log(todoData[random].title);
    setTodo(todoData);
  }
  return (
    <div className="App">
      <h1>ADVICE!</h1>
      <p className="para">
        advise number <span>'{count}'</span>
      </p>
      <h1 className="advise">"{advice}"</h1>
      <button className="Btn" onClick={getThougts}>
        click here
      </button>
      <ul>
        {todo.map((item, index) => (
          <div className="ListDiv">
            <li className="list">
              {item.id} : {item.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
