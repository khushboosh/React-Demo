import React, { useState, useEffect } from "react";

const UseEffectComp = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `Chat(${count})`;
    } else {
      document.title = `Chat`;
    }
  }, [count]);
  const counterHandler = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>Hello Lets Get Started</h1>

      <h2>{count}</h2>
      <div>
        <button onClick={counterHandler}>Click Me</button>
      </div>
    </div>
  );
};

export default UseEffectComp;
