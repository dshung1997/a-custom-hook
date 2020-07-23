import React from "react";
import { ClickableImage } from "./ClickableImage";
import { DeletableForm } from "./DeletableForm";
import { FontSizeContext } from "./context";
import "./App.css";
import { DumbText, EnhancedDumpText } from "./DumbText";
import { LogOnUseEffect } from "./LogOnUseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickableImage />

        <FontSizeContext.Provider value="40px">
          <LogOnUseEffect render={() => <DeletableForm />} />

          <FontSizeContext.Consumer>
            {(value) => <DumbText context={value} />}
          </FontSizeContext.Consumer>

          <EnhancedDumpText title="hehe" />
        </FontSizeContext.Provider>
      </header>
    </div>
  );
}

export default App;
