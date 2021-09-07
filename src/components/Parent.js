import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [parent, setParent] = useState("Parent");
  return (
    <div>
      <h>{parent}</h>
      <Child setParent={setParent} />
    </div>
  );
};

export default Parent;
