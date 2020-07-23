import React, { useState, useContext } from "react";
import { useThrottle } from "./useThrottle";
import logo from "./logo.svg";
import { FontSizeContext } from "./context";

const ClickableImage = () => {
  const [count, setCount] = useState(0);
  const setCountThrottled = useThrottle(setCount, 1000);
  const onClick = (e) => {
    setCountThrottled((c) => c + 1);
    e.preventDefault();
  };

  const fontSize = useContext(FontSizeContext);

  return (
    <div>
      <div onClick={onClick}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p style={{ fontSize }}>Count: {count}</p>
      <p style={{ fontSize }}>
        Click the React image to get count incremented !
      </p>

      <p className={count > 1 ? "shown" : "hidden"} style={{ fontSize }}>
        <i>Well, it's incremented at most once per second ʕ•ᴥ•ʔ</i>
      </p>
    </div>
  );
};

export { ClickableImage };
