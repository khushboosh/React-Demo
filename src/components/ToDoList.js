import React, { useState } from "react";

const ToDoList = () => {
  const bioArray = [
    { id: 0, name: "khushbi" },
    { id: 1, name: "khushi" },
  ];

  const [inArray, setArray] = useState(bioArray);

  const clearArrayDataHandler = () => {
    setArray([]);
  };

  const removeElementhandler = (id) => {
    const myFilteredArray = inArray.filter((curreElem) => {
      return curreElem.id !== id;
    });

    setArray(myFilteredArray);
  };
  return (
    <div>
      {inArray.map((c) => {
        return (
          <h1>
            key={c.id} , Name ={c.name}
            <button onClick={() => removeElementhandler(c.id)}>Remove</button>
          </h1>
        );
      })}
      <button onClick={clearArrayDataHandler}> ClearAll</button>
    </div>
  );
};
export default ToDoList;
