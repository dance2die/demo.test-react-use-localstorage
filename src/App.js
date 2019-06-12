import React from "react";

import useLocalStorage from "react-use-localstorage";

import "./App.css";

function App() {
  const [name, setName] = useLocalStorage("name");
  const [age, setAge] = useLocalStorage("age");

  return (
    <div className="App">
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Age:{" "}
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
