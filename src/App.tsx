import React, { useState } from "react";
import "./App.css";
import { ImageCanvas } from "./components/ImageCanvas";
import { PasteMessage } from "./components/PasteMessage";
import { UploadArea } from "./components/UploadArea";
import { ScaleType } from "./utils/image-scaling-utils";
import logo from "./logo.svg";
const WIDTH = 600;
const HEIGHT = 400;
function App() {
  const [image, setImage] = useState<HTMLImageElement>();
  const [scaleType, setScaleType] = useState<ScaleType>(ScaleType.COVER);

  return (
    <div className="App">
      <header className="App-header">
        <h4 className="react-conf">
          <img src={logo} className="App-logo" alt="logo" /> React Conf 2021
        </h4>
        <h3>Add an image</h3>
        <button
          className="toggle-button"
          onClick={(e) => {
            e.preventDefault();
            setScaleType(
              scaleType === ScaleType.COVER ? ScaleType.FIT : ScaleType.COVER
            );
          }}
        >
          {scaleType === ScaleType.COVER ? "COVER • fit" : "cover • FIT"}
        </button>
        <ImageCanvas
          scaleType={scaleType}
          image={image}
          widthTarget={WIDTH}
          heightTarget={HEIGHT}
        />
        <div className="actions">
          <UploadArea
            handleImage={(img) => {
              setImage(img);
            }}
          ></UploadArea>
          <PasteMessage
            handleImage={(img) => {
              setImage(img);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
