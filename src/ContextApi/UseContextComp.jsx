import React, { useContext } from "react";
import { FirstName, LastName, Phone } from "../App";

const UseContextComp = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const phone = useContext(Phone);
  return (
    <div>
      <h1>
        Here is the demo for useContext() hook
        {fname}
        {lname}
        {phone}
      </h1>
    </div>
  );
};

export default UseContextComp;
