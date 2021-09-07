import React, { useContext } from "react";
import { UserContext } from "../App";
const Name = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <h1> Name : {context.name}</h1>
    </div>
  );
};

export default Name;
