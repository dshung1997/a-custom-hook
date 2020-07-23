import React, { useState, useContext } from "react";
import { useThrottle } from "./useThrottle";
import { FontSizeContext } from "./context";

const initialValue = "123456789";

const DeletableForm = () => {
  const [value, setValue] = useState(initialValue);
  const setValueThrottled = useThrottle(setValue, 1000);

  const onChange = (e) => {
    setValueThrottled(e.target.value);
    e.preventDefault();
  };

  const fontSize = useContext(FontSizeContext);

  return (
    <div>
      <input
        className={"deletable"}
        type="text"
        value={value}
        onChange={onChange}
      />

      <p
        className={value !== initialValue ? "shown" : "hidden"}
        style={{ fontSize }}
      >
        <i>It can be deleted at most ONE char per second ¯\_(ツ)_/¯</i>
      </p>
    </div>
  );
};

export { DeletableForm };
