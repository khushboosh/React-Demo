import React, { useState, useEffect } from "react";

const CleanUpComp = () => {
  const [width, setWidth] = useState(window.screen.width);

  const actualWidth = () => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    console.log("add event");
    return () =>{
        window.removeEventListener("resize", actualWidth);
        console.log("remove event");
    }
  });
  return (
    <div>
      <h1>Actual size of the window is </h1>
      <h2>{width}</h2>
    </div>
  );
};

export default CleanUpComp;
