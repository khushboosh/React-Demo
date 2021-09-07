import React, { useState, useMemo } from "react";

const UseMemoComp = () => {
  const [count, setcount] = useState(0);
  const [initCount, setInitCount] = useState(10);

  const counterHandler = (props) => {
    setcount(count + 1);
  };

  const updateCountHandler = () => {
    setInitCount(initCount * 10);
  };
  
  const useMemoHook = useMemo(() => {
    console.log("check hello called");
    console.log(
      "this function is calling every time with all fnctions to avoid this situation we use useMemo hook"
    );
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>Hello Lets Get Started</h1>
      <h3>updated count : {initCount}</h3>
      <h2>{count}</h2>

      <h3>New Increased count :{useMemoHook} </h3>
      <div>
        <button onClick={counterHandler}>Click Me</button>
        <button onClick={updateCountHandler}>Update Count</button>
      </div>
    </div>
  );
};

export default UseMemoComp;
