import React, { useEffect } from "react";

export const withChild = (Component, text) => {
  return (props) => {
    return (
      <div>
        <Component {...props} />
        <p>{text}</p>
      </div>
    );
  };
};

export const withLogOnUseEffect = (Component) => {
  return () => {
    useEffect(() => {
      console.log("Mouted");

      return () => {
        console.log("Unmouted");
      };
    }, []);

    return <Component />;
  };
};
