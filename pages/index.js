import React, { useState } from "react";
import ParentComponent from "../src/parentComponent";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
      <ParentComponent></ParentComponent>
      <input
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      <hr />
      <ul>
        {historyList.map(rec => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
