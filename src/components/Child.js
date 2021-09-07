import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.setParent("I am child now")}>
        Change State
      </button>
    </div>
  );
};

export default Child;
