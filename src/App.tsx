import React from "react";
import "./App.css";
import { UploadArea } from "./components/UploadArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Add an image</h1>
        <UploadArea
          handleImage={(img) => {
            console.log(img);
          }}
        ></UploadArea>
      </header>
    </div>
  );
}

export default App;
