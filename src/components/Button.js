import React, { useState } from "react";

const Button = (props) => {
  const [initialCount, setCount] = useState(0);

  const [name, setName] = useState("change my name");
  
  console.log(name);
 
  const updateCounterHandler = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const decreaseCounterHandler = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };

  const changeNameHandler = () => {
    //name === "change my name" ? setName("khushboo") : setName("change my name");
    if(name === "change my name"){
      setName("khushboo");
    }
    else{
      setName("change my name");
    }
  };

  return (
    <div>
      <h1>{initialCount}</h1>
      <h2>{name}</h2>
      <h1>{props.name}</h1>
      <button onClick={updateCounterHandler}>Add</button>
      <button onClick={decreaseCounterHandler}>Sub</button>

      <button onClick={changeNameHandler}>click me</button>
    </div>
  );
};

export default Button;
