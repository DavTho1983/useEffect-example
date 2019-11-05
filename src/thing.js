import React, { useState, useEffect } from "react";

const Thing = props => {
  return (
    <div>
      <h2>This is the child component</h2>
      {props.someText}
    </div>
  );
};

export default Thing;
