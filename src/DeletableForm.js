import React, { useState } from "react";
import { useThrottle } from "./useThrottle";

const initialValue = "123456789";

const DeletableForm = () => {
  const [value, setValue] = useState(initialValue);
  const setValueThrottled = useThrottle(setValue, 1000);

  const onChange = (e) => {
    setValueThrottled(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <input
        className={"deletable"}
        type="text"
        value={value}
        onChange={onChange}
      />

      <p className={value !== initialValue ? "shown" : "hidden"}>
        <i>It can be deleted at most ONE char per second ¯\_(ツ)_/¯</i>
      </p>
    </div>
  );
};

export { DeletableForm };
