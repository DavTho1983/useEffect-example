import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/horizon_1-ConvertImage.jpg"
        secondaryImg="/static/speakers/colour/horizon_1.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/horizon_2-ConvertImage.jpg"
        secondaryImg="/static/speakers/colour/horizon_2.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
