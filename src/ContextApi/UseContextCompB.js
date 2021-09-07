import React from "react";
import UseContextComp from "./UseContextComp";
import UseContextCompC from "./UseContextCompC";

const UseContextCompB = (props) => {
  return (
    <div>
      <UseContextCompC />
      <UseContextComp />
    </div>
  );
};

export default UseContextCompB;
