import React from "react";
import { ClickableImage } from "./ClickableImage";
import { DeletableForm } from "./DeletableForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickableImage />
        <DeletableForm />
      </header>
    </div>
  );
}

export default App;
