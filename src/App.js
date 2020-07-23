import React from "react";
import { ClickableImage } from "./ClickableImage";
import { DeletableForm } from "./DeletableForm";
import { FontSizeContext } from "./context";
import "./App.css";
import { DumbText } from "./DumbText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickableImage />
        <FontSizeContext.Provider value="40px">
          <DeletableForm />
          <FontSizeContext.Consumer>
            {(value) => <DumbText context={value} />}
          </FontSizeContext.Consumer>
        </FontSizeContext.Provider>
      </header>
    </div>
  );
}

export default App;
