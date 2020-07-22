import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useThrottle } from "./useThrottle";

function App() {
  const [count, setCount] = useState(0);

  const setCountThrottled = useThrottle(setCount, 1000);

  const onClick = (e) => {
    setCountThrottled((c) => c + 1);
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <a onClick={onClick}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Count: {count}</p>
        <p>Click the React image to get count incremented !</p>

        <p className={count > 1 ? "shown" : "hidden"}>
          <i>Well, it's incremented at most once per second ʕ•ᴥ•ʔ</i>
        </p>
      </header>
    </div>
  );
}

export default App;
