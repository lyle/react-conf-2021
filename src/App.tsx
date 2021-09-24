import React, { useState } from "react";
import "./App.css";
import { ImageCanvas } from "./components/ImageCanvas";
import { UploadArea } from "./components/UploadArea";
import { ScaleType } from "./utils/image-scaling-utils";
const WIDTH = 600;
const HEIGHT = 400;
function App() {
  const [image, setImage] = useState<HTMLImageElement>();
  const [scaleType, setScaleType] = useState<ScaleType>(ScaleType.COVER);
  return (
    <div className="App">
      <header className="App-header">
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
        <h1>Add an image</h1>
        <UploadArea
          handleImage={(img) => {
            setImage(img);
          }}
        ></UploadArea>
      </header>
    </div>
  );
}

export default App;
