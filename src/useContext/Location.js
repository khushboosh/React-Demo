import React, { useContext } from "react";
import { UserContext } from "../App";

const Location = () => {
  const context = useContext(UserContext);
  console.log(context.location);
  return (
    <div>
      <h1>Location: {context.location}</h1>
    </div>
  );
};

export default Location;
