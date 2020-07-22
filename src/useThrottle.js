import { useRef } from "react";

export const useThrottle = (action, limit) => {
  let lastFunc = useRef(null);
  let whenLastRan = useRef(null);

  const runFunc = function () {
    const context = this;
    const args = arguments;

    if (!whenLastRan.current) {
      action.apply(context, args);
      whenLastRan.current = Date.now();
    } else {
      clearTimeout(lastFunc.current);
      lastFunc.current = setTimeout(function () {
        action.apply(context, args);
        whenLastRan.current = Date.now();
      }, limit - (Date.now() - whenLastRan.current));
    }
  };

  return runFunc;
};
