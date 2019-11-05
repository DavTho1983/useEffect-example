import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      <div>
        <ImageToggleOnScroll
          primaryImg="/static/speakers/bw/horizon_1-ConvertImage.jpg"
          secondaryImg="/static/speakers/colour/horizon_1.jpg"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <ImageToggleOnScroll
          primaryImg="/static/speakers/bw/horizon_2-ConvertImage.jpg"
          secondaryImg="/static/speakers/colour/horizon_2.jpg"
          alt=""
        />
      </div>
      <div>
        <ImageToggleOnScroll
          primaryImg="/static/speakers/bw/horizon_1-ConvertImage.jpg"
          secondaryImg="/static/speakers/colour/horizon_1.jpg"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <ImageToggleOnScroll
          primaryImg="/static/speakers/bw/horizon_2-ConvertImage.jpg"
          secondaryImg="/static/speakers/colour/horizon_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageChangeOnScroll;
