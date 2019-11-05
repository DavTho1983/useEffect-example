import React, { useState, useEffect } from "react";
import Thing from "./thing";

const ParentComponent = () => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value);
        }}
        placeholder="Enter some more text"
      />
      <Thing someText={inputText}></Thing>
    </div>
  );
};

export default ParentComponent;
