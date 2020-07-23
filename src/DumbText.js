import * as React from "react";
import { FontSizeContext } from "./context";
import { withChild, withLogOnUseEffect } from "./HOC";

class DumbText extends React.Component {
  static contextType = FontSizeContext;
  render() {
    return (
      <p style={{ fontSize: this.context }}>Dumb text that has no meaning</p>
    );
  }
}

const EnhancedDumpText = withChild(withLogOnUseEffect(DumbText), "😡");

export { DumbText, EnhancedDumpText };
