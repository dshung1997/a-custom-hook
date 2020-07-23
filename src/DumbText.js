import * as React from "react";
import { FontSizeContext } from "./context";

class DumbText extends React.Component {
  static contextType = FontSizeContext;
  render() {
    return <p style={{ fontSize: this.context }}>How DUMB it is !</p>;
  }
}

export { DumbText };
