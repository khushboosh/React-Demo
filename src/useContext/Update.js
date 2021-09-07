import React, { useContext } from "react";
import { UserContext } from "../App";

const Update = () => {
  const context = useContext(UserContext);
  return (
    <>
      <div>
        <label>Enter Name</label>
        <input
          type="text"
          onChange={(event) => context.setName(event.target.value)}
        />
      </div>
      <div>
        <label>Enter Location</label>
        <input
          type="text"
          onChange={(event) => context.setLocation(event.target.value)}
        />
      </div>
    </>
  );
};

export default Update;
