import { useEffect } from "react";

// Render prop
export const LogOnUseEffect = ({ render }) => {
  useEffect(() => {
    console.log("Mouted");

    return () => {
      console.log("Unmouted");
    };
  }, []);
  return render();
};
