import React, { useState } from "react";
import { useThrottle } from "./useThrottle";
import logo from "./logo.svg";

const ClickableImage = () => {
  const [count, setCount] = useState(0);
  const setCountThrottled = useThrottle(setCount, 1000);
  const onClick = (e) => {
    setCountThrottled((c) => c + 1);
    e.preventDefault();
  };

  return (
    <div>
      <div onClick={onClick}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>Count: {count}</p>
      <p>Click the React image to get count incremented !</p>

      <p className={count > 1 ? "shown" : "hidden"}>
        <i>Well, it's incremented at most once per second ʕ•ᴥ•ʔ</i>
      </p>
    </div>
  );
};

export { ClickableImage };
